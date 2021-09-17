<?php

function al_max($a, $b): float | int
{
    return $a >= $b ? $a : $b;
}

$numbers = [11, 18, 19, 20, 200, 1, 7];

for ($i = 1, $max = $numbers[0]; $i < count($numbers); $i++) $max = al_max($numbers[$i], $max);

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
