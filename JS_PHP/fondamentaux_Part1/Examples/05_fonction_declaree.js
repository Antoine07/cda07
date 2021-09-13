
// donc on peut les appeler après les avoir définies
foo();

// Les fonctions en JS sont compilées en premier
function foo(){
    console.log("FOO");
}


// Expression de fonction 

// exp(); // On ne peut pas appeler une expression de fonction avant de les avoir définie, il faut d'abord les définir

const exp = function(){
    console.log("EXPRESSION DE FONCTION");

}

exp();