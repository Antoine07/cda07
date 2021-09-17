<?php

$results = [];
$data = [1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1, 51, 3, 3, 3, 51, 51, 51, 51, 51, 0];

// D'abord c'est compter un élément inutile 
// function countOcc(int $occ, array $numbers):int{
//     $sum  = 0;
//     foreach( $numbers as $num){
//         if($occ == $num) $sum++;
//     }

//     return $sum;
// }

// refactoring dans la fonction
// sort($data);
// foreach($data as $num){
//     $key = "k$num" ; // force le type pour avoir une chaîne de caractères pour avoir un tableau associatif 

//     if( !array_key_exists($key, $results) ) $results[$key] = 1;
//     else{
//         $results[$key] += 1;
//     }
// }

function countAllOcc(array $numbers)
{
    sort($numbers);
    $results = [];
    foreach ($numbers as $num) {
        $key = "k$num"; // force le type pour avoir une chaîne de caractères pour avoir un tableau associatif 
        $results[$key] = !array_key_exists($key, $results) ?  1 : $results[$key] + 1;
    }

    return $results;
}
