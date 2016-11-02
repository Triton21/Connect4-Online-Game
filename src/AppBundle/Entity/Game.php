<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Game
 *
 * @ORM\Table(name="game")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\GameRepository")
 */
class Game
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
     * @var int
     *
     * @ORM\Column(name="player1", type="integer")
     */
    private $player1;

    /**
     * @var string
     *
     * @ORM\Column(name="player2", type="integer")
     */
    private $player2;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity="Move", mappedBy="game")
     */
    private $moves;

    public function __construct()
    {
        $this->moves = new ArrayCollection();
    }

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
     * Set player1
     *
     * @param integer $player1
     * @return Game
     */
    public function setPlayer1($player1)
    {
        $this->player1 = $player1;

        return $this;
    }

    /**
     * Get player1
     *
     * @return integer 
     */
    public function getPlayer1()
    {
        return $this->player1;
    }

    /**
     * Set player2
     *
     * @param string $player2
     * @return Game
     */
    public function setPlayer2($player2)
    {
        $this->player2 = $player2;

        return $this;
    }

    /**
     * Get player2
     *
     * @return string 
     */
    public function getPlayer2()
    {
        return $this->player2;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Game
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
     * Add moves
     *
     * @param \AppBundle\Entity\Move $moves
     * @return Game
     */
    public function addMove(\AppBundle\Entity\Move $moves)
    {
        $this->moves[] = $moves;

        return $this;
    }

    /**
     * Remove moves
     *
     * @param \AppBundle\Entity\Move $moves
     */
    public function removeMove(\AppBundle\Entity\Move $moves)
    {
        $this->moves->removeElement($moves);
    }

    /**
     * Get moves
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getMoves()
    {
        return $this->moves;
    }
}
