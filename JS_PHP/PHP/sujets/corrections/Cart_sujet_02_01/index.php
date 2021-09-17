<?php
/**
 * Initialisation du projet
 */

require_once __DIR__ . '/Product.php';
require_once __DIR__ . '/Bike.php';
require_once __DIR__ . '/StorageBike.php';

/**
 * Variables
 */
$storage = new StorageBike();

/**
 * On récupère l'ensemble des produits 
 */

$products = [];

foreach($storage->load() as [$meta, $price, $color]){
    [ $name, $type ] = explode(" ", $meta); // assignation par décomposition
    // On hydrate les produits avec notre objet de type Bike
    $products[] = new Bike(name : $name, type : $type, price : $price, color : $color );
}

/**
 * View
 */
include 'show.php';
