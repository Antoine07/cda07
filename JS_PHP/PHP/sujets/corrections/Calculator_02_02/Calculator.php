<?php

/**
 *  Classe métier permettant de réaliser le projet
 *
 * Class Calculator
 */
class Calculator
{

    private static int $precision = 2;

    public function __construct()
    {

        if (!isset($_SESSION)) session_start();

        if (empty($_SESSION['result']))
            $_SESSION['result'] = 0;

        if (empty($_SESSION['memory'])) $_SESSION['memory'] = false;

        $this->memory = $_SESSION['memory'];
    }

    public function mul(float $a, float $b)
    {

        if ($this->isMemory()) {
            $this->setResult(($a * $b));

            return $this->result();
        }

        return round(($a * $b), self::$precision);
    }

    public function sub(float $a, float $b)
    {

        $res = $a - $b;

        if ($this->isMemory()) {
            $this->setResult($res);

            return $this->result();
        }

        return round($res, self::$precision);
    }

    public function add(float $a, float $b)
    {

        $res = $a + $b;

        if ($this->isMemory()) {
            $this->setResult($res);

            return $this->result();
        }

        return round($res, self::$precision);
    }

    public function avg(array $numbers)
    {

        $count = count($numbers);

        /*
         * On lance une exception si $count vaut zéro, les exceptions sont largement utilisées en Objet
         * pour gérer les erreurs/exceptions dans le code. En effet, une application Objet comporte bcp de classes
         * il faut donc une technique pour faire remonter les erreurs/exceptions de manière simple et unique.
         */
        if (!$count) throw new Exception('Division by zero.');

        $avg = (array_sum($numbers) / $count);

        return round($avg, self::$precision);
    }

    public function setMemory(bool $m)
    {

        $_SESSION['memory'] = $m;
    }

    private function setResult(float $res)
    {

        $_SESSION['result'] += $res;
    }

    public function result()
    {
        return round(($_SESSION['result']), self::$precision);
    }

    public function reset()
    {

        $_SESSION = null;
    }

    public function isMemory()
    {

        if (empty($_SESSION['memory'])) return false;

        return $_SESSION['memory'];
    }

    public static function  setPrecision(int $precision)
    {
        self::$precision =  $precision;
    }
}
