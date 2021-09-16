# Features PHP 7/8

## 01 Exercices

```php

/**
* Boolean
*/
/*
*  Exercise quelle valeur de boolean retourne les expressions suivantes
*/

$exp1 = (0 != 0 && 1/0 == 2) ; // Elle s'exécute et vaut false, la deuxième condition n'est pas évaluée

$exp2 = (!true || true) ; // Elle s'exécute et vaut true. 

$exp3 = (!true || false) ; // Elle s'exécute et vaut false 

$exp4 = !(true || true) ; // Elle s'exécute et vaut false

$exp5 = (true || false) && false; // Elle s'exécute et vaut false

$exp6 = (true || false) && true; // Elle s'exécute et vaut true

$exp7 = (true || false) && ( (!false && true) || true ); // Elle s'exécute et vaut true
// true && (true || true)
// true && true = true

$exp8 = ((false || false) && (!false && false)) || true ;
// false && ( false ) || true
// false || true = true 
$exp9 = (false || false) && (!false && false) || true ;
// false && (false) || true
// false || true = true

$exp10 = 3*3.5 > 10 ; // true

/*
13 + true = 14 // PHP caste le true en 1 et l'ajoute à 13
13 + false = 13 // PHP caste le false en 0 et l'ajoute à 13
*/

$exp10bis = (13 + (11 > 10))  ===  14 ; // true
$exp10bisbis = (13 + (11 < 10))  ===  14 ; // false

$exp11 = 3*7  == 21 ; // true

$exp12 = 3-1 >= 2; // les opérations arithmétiques sont faites de la gauche vers la droite les symboles de comparaisons ne sont pas prioritaires

$exp13 = 0 < pow(2,10) == pow(2,10); // true PHP caste les valeurs afin qu'il puisse les comparer 

/*
pow(2,10) == pow(2,10) + 1 ; // false car il fait d'abord le calcul puis la comparaison après
(true) (pow(2,10) == pow(2,10)) + 1 // 2 
*/

$exp13bis = (bool) ( ( pow(2,10) == pow(2,10) ) + 1 ) ; // true

$exp14 = !(!true); // true

$exp15 = (5.5*2 == 11 || 1/2 != .5) && (3%2 == 0);
// (true && false ) =>  false

$exp16 = (5.5*2 == 11 || 1/2 != .5) && (3%2 != 0);
// true && true => true
```

## 02 Exercice

écrire un script pour déterminer le maximun de trois variables distinctes :

```php
$a = 10;
$b = 5;
$c = 7;
```