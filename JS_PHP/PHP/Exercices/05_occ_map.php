<?php
/*
composer global require php-ds/php-ds
*/

// création d'un Map comme un dictionnaire de clé/valeur chaque clé étant unique
// c'est une structure de données PHP qui permet d'enregistrer des valeurs dont l'accès est très rapide
// pas comme dans un tableau où implicitement vous avez la notion d'ordre


$results = [];
$data = [1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1, 51, 3, 3, 3, 51, 51, 51, 51, 51, 0];

function countAllOcc(array $numbers)
{
    sort($numbers);
    $res = new Ds\Map([]); // clé et valeur pas de problème d'indice comme dans un tableau PHP

    foreach ($numbers as $key) {
        $res->hasKey($key) ? $res->put($key, $res->get($key) + 1) : $res->put($key, 1) ;
    }

    return $res;
}
