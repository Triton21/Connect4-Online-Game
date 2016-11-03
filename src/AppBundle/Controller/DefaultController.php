<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use AppBundle\Entity\Player;
use AppBundle\Entity\Game;
use AppBundle\Entity\Move;

class DefaultController extends Controller {

    /**
     * 
     */
    public function indexAction(Request $request) {
        $user = $this->get('session')->get('user');
        if ($user) {
            return $this->redirectToRoute('app_main');
        }

        $player = new Player();

        $form = $this->createFormBuilder($player)
                ->add('name', 'text')
                ->add('save', 'submit', array('label' => 'Let`s play!',
                    'attr' => array('class' => 'btn btn-lg btn-danger')))
                ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $userName = $player->getName();

            $ip = $this->container->get('request')->getClientIp();
            //var_dump($ip);die;
            $player->setIp($ip);
            //set player status to Online
            $player->setStatus(1);
            $player->setLastlogin(new \DateTime());
            $em->persist($player);
            $em->flush();
            //set the user ID to the session
            $userId = $player->getId();
            $userArray = ['userId' => $userId, 'userName' => $userName,];

            $this->get('session')->set('user', $userArray);
            //var_dump($userArray);die;
            return $this->redirectToRoute('app_main');
        }

        return $this->render('AppBundle:Default:index.html.twig', array(
                    'form' => $form->createView(),));
    }

    /**
     * 
     */
    public function mainAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        //check if the session still exist
        $user = $this->get('session')->get('user');
        if (!$user) {
            return $this->redirectToRoute('app_index');
        }
        //var_dump($user);die;
        //check if the user entity still exist or has been disabled
        $userCheck = $em->getRepository('AppBundle:Player')
                ->find($user['userId']);
        if (!$userCheck) {
            $request->getSession()->invalidate(1);
            return $this->redirectToRoute('app_index');
        }
        //set player status to Online (1)
        $player = $em->getRepository('AppBundle:Player')
                ->find($user['userId']);
        $player->setStatus(1);
        $player->setOpponent('');
        $em->persist($player);
        $em->flush();

        //find if there is any game with my id and delete
        $games = $em->getRepository('AppBundle:Game')
                ->findMyGames($user['userId']);
        if ($games) {
            foreach ($games as $game) {
                $em->remove($game);
                $em->flush();
            }
        }

        return $this->render('AppBundle:Default:mainpage.html.twig', array(
                    'user' => $user,));
    }

    /**
     * Update last online time property in database
     */
    public function ajaxonlineAction(Request $request) {
        $html = 'success';
        $userId = $request->request->get('userId');

        $em = $this->getDoctrine()->getManager();
        $player = $em->getRepository('AppBundle:Player')
                ->find($userId);
        if ($player) {
            $player->setLastlogin(new \DateTime());
            $em->persist($player);
            $em->flush();
            $html = 'success';
        } else {
            $html = 'error';
        }
        $html = $userId;
        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * Update last online time property in database
     */
    public function ajaxusersAction() {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        $myId = $user['userId'];
        $allUser = $em->getRepository('AppBundle:Player')
                ->findAll();
        $html = $this->renderView('AppBundle:Default:userspage.html.twig', array(
            'myId' => $myId, 'allUser' => $allUser));


        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * Check if there is any modal
     */
    public function ajaxmodalcheckAction() {
        $em = $this->getDoctrine()->getManager();
        $oppId = 'no';
        $user = $this->get('session')->get('user');
        $myId = $user['userId'];
        $myPlayer = $em->getRepository('AppBundle:Player')
                ->find($myId);
        if ($myPlayer) {
            $modal = $myPlayer->getModal();
            if ($modal && $modal != '0') {
                $oppId = $modal;
                $opponent = $em->getRepository('AppBundle:Player')
                        ->find($oppId);
                if ($opponent) {
                    $oppName = $opponent->getName();
                }
                //disable modal here
                $myPlayer->setModal('');
                $em->persist($myPlayer);
                $em->flush();
            } else {
                $oppId = 'no';
                $oppName = 'no';
            }
        }
        $response = new JsonResponse(array('oppName' => $oppName, 'oppId' => $oppId));
        return $response;
    }

    /**
     * Create the connection between two players
     */
    public function ajaxconnectingAction() {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        $myName = $user['userName'];
        $myId = $user['userId'];

        //check if opponent already found me
        $myPlayer = $em->getRepository('AppBundle:Player')
                ->find($myId);
        $mystatus = $myPlayer->getStatus();
        //var_dump($mystatus);die;
        if ($mystatus == '3') {
            $response = new JsonResponse('opponent exist');
            return $response;
        }
        //search for opponent
        $opponent = $em->getRepository('AppBundle:Player')
                ->findOpponent($myId);


        //var_dump($opponent);die;
        if (!$opponent) {
            $html = 'no result';
        } else {
            //opponent found, set status and opponent id
            $myPlayer->setStatus(3);
            $myPlayer->setOpponent($opponent->getId());
            $em->persist($myPlayer);
            $opponent->setStatus(3);
            $opponent->setOpponent($myId);
            $em->persist($opponent);
            $em->flush();
            $html = 'opponent exist';
            $game = new Game();
            $game->setPlayer1($myId);
            $game->setPlayer2($opponent->getId());
            $game->setCreatedAt(new \DateTime());
            $em->persist($game);
            $em->flush();
        }

        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * Create the game connection between two users if the modal window was accepted
     */
    public function ajaxConnectUserAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        $myName = $user['userName'];
        $myId = $user['userId'];
        $oppId = $request->request->get('oppId');
        $html = 'no result';
        $myPlayer = $em->getRepository('AppBundle:Player')
                ->find($myId);
        $opponent = $em->getRepository('AppBundle:Player')
                ->find($oppId);

        //check if opponent still wants to play
        if ($opponent->getStatus() == '1') {
            $response = new JsonResponse($html);
            return $response;
        }


        if ($opponent && $myPlayer) {
            $myPlayer->setStatus(3);
            $myPlayer->setOpponent($opponent->getId());
            $em->persist($myPlayer);
            $opponent->setStatus(3);
            $opponent->setOpponent($myId);
            $em->persist($opponent);
            $em->flush();
            $html = 'opponent exist';
            $game = new Game();
            $game->setPlayer1($myId);
            $game->setPlayer2($opponent->getId());
            $game->setCreatedAt(new \DateTime());
            $em->persist($game);
            $em->flush();
        }
        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * Request a game with a user. Put my id to the opponent player entity (modal property)
     */
    public function ajaxplayuserAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        $myId = $user['userId'];
        $oppId = $request->request->get('oppId');
        $html = 'no modal';
        $opponent = $em->getRepository('AppBundle:Player')
                ->find($oppId);
        if ($opponent) {
            $modal = $opponent->getModal();
            if (!$modal || $modal == '0') {
                $opponent->setModal($myId);
                $em->persist($opponent);
                $em->flush();
                $html = 'modal active';
                //set my status to 2 (connection in progress)
                $myPlayer = $em->getRepository('AppBundle:Player')
                        ->find($myId);
                $myPlayer->setStatus(2);
                $em->persist($myPlayer);
                $em->flush();
            }
        }
        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * Checks if an opponent accepted my game request.
     */
    public function ajaxCheckMyStatusAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        $myId = $user['userId'];
        $html = 'no result';
        $myPlayer = $em->getRepository('AppBundle:Player')
                ->find($myId);
        if ($myPlayer) {
            $myStatus = $myPlayer->getStatus();
            if ($myStatus == '3') {
                $response = new JsonResponse('opponent exist');
                return $response;
            }
            if ($myStatus == '4') {
                $response = new JsonResponse('rejected');
                return $response;
            }
        }
        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * Reject to play. Set my status to 4(reject)
     */
    public function ajaxRejectPlayAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        $myId = $user['userId'];
        $oppId = $request->request->get('oppId');
        $html = 'no result';
        $opponent = $em->getRepository('AppBundle:Player')
                ->find($oppId);
        if ($opponent) {
            $opponent->setStatus(4);
            $em->persist($opponent);
            $em->flush();
            $html = 'rejected';
        }
        $response = new JsonResponse($html);
        return $response;
    }

    /**
     * 
     */
    public function logoutAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        //check if the session still exist
        $user = $this->get('session')->get('user');
        if (!$user) {
            return $this->redirectToRoute('app_index');
        }
        if ($user) {
            $player = $em->getRepository('AppBundle:Player')
                    ->find($user['userId']);
            if ($player) {
                $em->remove($player);
                $em->flush();
            }
        }
        $request->getSession()->invalidate(1);
        return $this->redirectToRoute('app_index');
    }

    /**
     * One player action
     */
    public function sologameAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $user = $this->get('session')->get('user');
        if (!$user) {
            return $this->redirectToRoute('app_index');
        }
        
        $player = $em->getRepository('AppBundle:Player')
                    ->find($user['userId']);
        if(!$player) {
            $request->getSession()->invalidate(1);
            return $this->redirectToRoute('app_index');
        } else {
            $player->setStatus(3);
            $em->persist($player);
            $em->flush();
        }
        
        
        return $this->render('AppBundle:Default:sologame.html.twig', array(
                    'user' => $user,));
    }

    /**
     * 
     */
    public function gameAction(Request $request) {
        //check if the session still exist
        $user = $this->get('session')->get('user');
        if (!$user) {
            return $this->redirectToRoute('app_index');
        }
        $myId = $user['userId'];
        //check if the user entity still exist or has been disabled
        $em = $this->getDoctrine()->getManager();
        $userCheck = $em->getRepository('AppBundle:Player')
                ->find($myId);
        if (!$userCheck) {
            $request->getSession()->invalidate(1);
            return $this->redirectToRoute('app_index');
        }



        //check opponent and my status again
        $myPlayer = $em->getRepository('AppBundle:Player')
                ->find($user['userId']);
        $opponent = $em->getRepository('AppBundle:Player')
                ->find($myPlayer->getOpponent());
        if (!$opponent) {
            return $this->redirectToRoute('app_main');
        }

        $game = $em->getRepository('AppBundle:Game')
                ->findMyGame($user['userId']);
        $blueId = $game->getPlayer1();
        //var_dump($blueId);die;
        if ($blueId == $myId) {
            $startMove = true;
            $myColor = 'blue';
        } else {
            $startMove = false;
            $myColor = 'red';
        }
        $startColor = 'blue';
        //var_dump($myId);die;


        return $this->render('AppBundle:Default:game.html.twig', array(
                    'startColor' => $startColor, 'myColor' => $myColor, 'myId' => $myId, 'startMove' => $startMove, 'game' => $game, 'opponent' => $opponent, 'myPlayer' => $myPlayer, 'user' => $user,));
    }

    /**
     * Update move from two player game
     */
    public function ajaxmoveAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $myMove = $request->request->get('move');
        $myId = $request->request->get('myId');
        $gameId = $request->request->get('gameId');
        $game = $em->getRepository('AppBundle:Game')
                ->find($gameId);
        if ($game) {
            $move = new Move();
            $move->setMove($myMove);
            $move->setStatus('new');
            $move->setPlayerId($myId);
            $move->setCreatedAt(new \DateTime());
            $move->setGame($game);
            $em->persist($game);
            $em->persist($move);
            $em->flush();
        }


        $response = new JsonResponse(array('move' => $myMove, 'myId' => $myId, 'gameId' => $gameId));
        return $response;
    }

    /**
     * Update move from two player game
     */
    public function ajaxCheckMoveAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $oppId = $request->request->get('oppId');
        $gameId = $request->request->get('gameId');
        $newMove = $em->getRepository('AppBundle:Move')
                ->findNewMove($gameId, $oppId);

        //check if the opponent still active
        $opponent = $em->getRepository('AppBundle:Player')
                ->find($oppId);
        if (!$opponent) {
            $move = 'no opponent';
            $response = new JsonResponse(array('oppMove' => $move,));
            return $response;
        }
        if ($opponent) {
            $status = $opponent->getStatus();
            if ($status != '3') {
                $move = 'no opponent';
                $response = new JsonResponse(array('oppMove' => $move,));
                return $response;
            }
        }

        if ($newMove) {
            $move = $newMove[0]->getMove();
            $newMove[0]->setStatus('old');
            $em->persist($newMove[0]);
            $em->flush();
        } else {
            $move = 'no move';
        }
        //set the move as old


        $response = new JsonResponse(array('oppMove' => $move,));
        return $response;
    }

    /**
     * 
     */
    public function testAction($gameId, $oppId) {
        $em = $this->getDoctrine()->getManager();


        $newMove = $em->getRepository('AppBundle:Move')
                ->findNewMove($gameId, $oppId);

        var_dump($newMove);
        die;

        $move = $newMove->getMove();
        if ($move) {
            $newMove->setStatus('old');
        }
        var_dump($newMove);
        die;


        die;
        return $this->render('AppBundle:Default:test.html.twig');
    }

    /**
     * 
     */
    public function connectingAction() {

        $user = $this->get('session')->get('user');
        $em = $this->getDoctrine()->getManager();
        //set player status to searching (2)
        $player = $em->getRepository('AppBundle:Player')
                ->find($user['userId']);
        $player->setStatus(2);
        $player->setOpponent('');
        $em->persist($player);
        $em->flush();

        return $this->render('AppBundle:Default:connecting.html.twig', array(
                    'user' => $user,));
    }

}
