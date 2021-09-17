<?php

class Bike extends Product
{
    // Attention à votre version de PHP >= 8
    public function __construct(
        private string $name,
        private float $price,
        private string $color,
        protected string $type
    ) {

        $this->setColor($color);
        $this->setType($type);
        $this->setName($name);
        $this->setPrice($price);
    }

    /**
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * @param string $color
     */
    public function setColor(string $color)
    {
        $this->color = $color;
    }
}
