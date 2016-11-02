<?php

namespace AppBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class PlayerCommand extends ContainerAwareCommand {

    protected function configure() {
        $this
                ->setName('player:clean')
                ->setDescription('Clean old players')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output) {
        $em = $this->getContainer()->get('doctrine')->getManager();
        $players = $em->getRepository('AppBundle:Player')->findAll();
        foreach ($players as $player) {
            $lastonline = $player->getLastlogin();
            $now = new \DateTime();
            $diffInSeconds = $now->getTimestamp() - $lastonline->getTimestamp();
            $output->writeln($diffInSeconds);
            if ($diffInSeconds > 180) {
                $id = $player->getId();
                $em->remove($player);
                $em->flush();
                //find if there is any game with my id and delete
                $games = $em->getRepository('AppBundle:Game')
                        ->findMyGames($id);
                if ($games) {
                    foreach ($games as $game) {
                        $em->remove($game);
                        $em->flush();
                    }
                }
            }
        }
    }

}
