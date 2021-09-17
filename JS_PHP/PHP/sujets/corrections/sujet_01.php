<?php

/**
 * 
 **************
Calculator
 **************
// -  precision
+ CONSTANTE precision
 **************

// + __construct($precision = 1)
+ __construct()
+ mul(float $a, float $b):float
+ sub(float $a, float $b):float
+ add(float $a, float $b): float
+ avg(array $numbers): float

 */

/**

class Calculator{
    const PRECISION = 0.01;
    // attributs de la classe
    private array $numbers;
    private float $percentage;

    // initialisation des attributs de la classe
    public function __construct(array $numbers = [], float $percentage = .1){}
}


 */

class Calculator
{
    private static int $precision = 1;
    public int $num = 2;

    // On peut maintenant définir les attributs de la classe et éventuellemnt leurs attribuer des valeurs directement dans le constructeur 
    public function __construct(
        private array $numbers = [],
        private float $percentage = .1
    ) {
    }

    public static function setPrecision(int $num): void
    {

        self::$precision = $num;
    }

    public function mul(float $a, float $b): float
    {

        return round($a * $b, self::$precision); // self se refère à la classe et non à l'objet
    }

    public function sub(float $a, float $b): float
    {

        return round($a - $b, self::$precision); // self se refère à la classe et non à l'objet
    }

    public function add(float $a, float $b): float
    {

        return round($a + $b, self::$precision); // self se refère à la classe et non à l'objet
    }

    public function avg(array $numbers): float | DivisionByZeroError
    {
        $sum = array_sum($numbers);

        if ($sum > 0) {
            return round($sum/count($numbers), self::$precision); // self se refère à la classe et non à l'objet
        }

        throw new DivisionByZeroError("Division par zéro impossible");
    }
}

Calculator::setPrecision(2); // de manière statique cela reste dans la classe

// les instances de ces classes auront toutes la même précision 
$cal1 = new Calculator;
$cal1->num = 8;

$cal2 = new Calculator;
var_dump($cal2->num);
$cal3 = new Calculator;
$cal4 = new Calculator;
$cal5 = new Calculator;
