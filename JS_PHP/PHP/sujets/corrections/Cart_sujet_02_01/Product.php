<?php

class Product {

    public function __construct(
        private string $name, 
        private float $price,
        protected string $type
        ) {
        $this->setName($name);
        $this->setPrice($price);
    }

    /**
     * @return float
     */
    public function getPrice() {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price) {
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name) {
        $this->name = $name;
    }


        /**
         * Get the value of type
         */ 
        public function getType():string
        {
                return $this->type;
        }

        /**
         * Set the value of type
         *
         * @return  self
         */ 
        public function setType(string $type):void
        {
                $this->type = $type;
        }
}