<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Move
 *
 * @ORM\Table(name="move")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\MoveRepository")
 */
class Move
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="move", type="string", length=255)
     */
    private $move;
    
    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=255)
     */
    private $status;
    
    /**
     * @var string
     *
     * @ORM\Column(name="playerId", type="integer" )
     */
    private $playerId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;
    
    /**
     * @ORM\ManyToOne(targetEntity="Game", inversedBy="moves")
     * @ORM\JoinColumn(name="game_id", referencedColumnName="id", onDelete="CASCADE")
     */
    private $game;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set move
     *
     * @param string $move
     * @return Move
     */
    public function setMove($move)
    {
        $this->move = $move;

        return $this;
    }

    /**
     * Get move
     *
     * @return string 
     */
    public function getMove()
    {
        return $this->move;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Move
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set game
     *
     * @param \AppBundle\Entity\Game $game
     * @return Move
     */
    public function setGame(\AppBundle\Entity\Game $game = null)
    {
        $this->game = $game;

        return $this;
    }

    /**
     * Get game
     *
     * @return \AppBundle\Entity\Game 
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * Set status
     *
     * @param string $status
     * @return Move
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return string 
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set playerId
     *
     * @param integer $playerId
     * @return Move
     */
    public function setPlayerId($playerId)
    {
        $this->playerId = $playerId;

        return $this;
    }

    /**
     * Get playerId
     *
     * @return integer 
     */
    public function getPlayerId()
    {
        return $this->playerId;
    }
}
