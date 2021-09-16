# PHP

## 01 Exercices

```php

/**
* Boolean
*/
/*
*  Exercise quelle valeur de boolean retourne les expressions suivantes
*/

$exp1 = (0!= 0 && 1/0 == 2) ;    

$exp2 = (!true || true) ;

$exp3 = (!true || false) ;

$exp4 = !(true || true) ;

$exp5 = (true || false) && false;

$exp6 = (true || false) && true;

$exp7 = (true || false) && ( (!false && true) || true );

$exp8 = ((false || false) && (!false && false)) || true ;

$exp9 = (false || false) && (!false && false) || true ;

$exp10 = 3*3.5 > 10 ;

$exp11 = 3*7  == 21 ;

$exp12 = 3-1 >= 1;

$exp13 = 0 < pow(2,10) == pow(2,10);

$exp14 = !(!true);

$exp15 = (5.5*2 == 11 || 1/2 != .5) && (3%2 == 0);

$exp16 = (5.5*2 == 11 || 1/2 != .5) && (3%2 != 0);

```