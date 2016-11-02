<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Player
 *
 * @ORM\Table(name="player")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PlayerRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Player
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;
    
    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=255, nullable=true)
     */
    private $status;
    
    /**
     * @var string
     *
     * @ORM\Column(name="opponent", type="string", length=255, nullable=true)
     */
    private $opponent;
    
    /**
     * @var string
     *
     * @ORM\Column(name="modal", type="string", length=255, nullable=true)
     */
    private $modal;

    /**
     * @var string
     *
     * @ORM\Column(name="ip", type="string", length=255)
     */
    private $ip;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="lastlogin", type="datetime", nullable=true)
     */
    private $lastlogin;


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
     * Set name
     *
     * @param string $name
     * @return Player
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set ip
     *
     * @param string $ip
     * @return Player
     */
    public function setIp($ip)
    {
        $this->ip = $ip;

        return $this;
    }

    /**
     * Get ip
     *
     * @return string 
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * Set lastlogin
     *
     * @param \DateTime $lastlogin
     * @return Player
     */
    public function setLastlogin($lastlogin)
    {
        $this->lastlogin = $lastlogin;

        return $this;
    }

    /**
     * Get lastlogin
     *
     * @return \DateTime 
     */
    public function getLastlogin()
    {
        return $this->lastlogin;
    }

    /**
     * Set status
     *
     * @param string $status
     * @return Player
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
     * Set opponent
     *
     * @param string $opponent
     * @return Player
     */
    public function setOpponent($opponent)
    {
        $this->opponent = $opponent;

        return $this;
    }

    /**
     * Get opponent
     *
     * @return string 
     */
    public function getOpponent()
    {
        return $this->opponent;
    }

    /**
     * Set modal
     *
     * @param string $modal
     * @return Player
     */
    public function setModal($modal)
    {
        $this->modal = $modal;

        return $this;
    }

    /**
     * Get modal
     *
     * @return string 
     */
    public function getModal()
    {
        return $this->modal;
    }
}
