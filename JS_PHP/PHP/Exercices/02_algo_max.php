<?php
// ALGO pour déterminer le max avec une approche diviser pour mieux régner
$a = 10;
$b = 5;
$c = 7;

$max = $a;

if ($b > $max) {
    $max = $b;
}

if ($c > $max) {
    $max = $c;
}

function al_max($a, $b): float | int
{
    return $a >= $b ? $a : $b;
}

echo al_max($a, al_max($b, $c));

echo PHP_EOL;

$a = 10;
$b = 5;
$c = 7;
$d = 17;

echo al_max($a, al_max($b, al_max($c, $d)));

echo PHP_EOL;

echo al_max(al_max($a, $b), al_max($c, $d));

$numbers = [11, 18,19, 20, 200, 1, 7 ];

$max = array_shift($numbers);
foreach($numbers as $num){
    $max = al_max($num, $max);
}

echo PHP_EOL;

echo $max;

echo PHP_EOL;

/**
    max = 11
    boucle de [18,19, 20, 200, 1, 7]
    
    max = al_max(18, 11) = 18,   i = 0
    
    max = al_max(19, 18) = 19,   i = 1

    max = al_max(20, 19) = 20,   i = 2

    max = al_max(200, 20) = 200, i = 3

    max = al_max(1, 200) = 200, i = 4

    max = al_max(7, 200) = 200, i = 5

    200
*/