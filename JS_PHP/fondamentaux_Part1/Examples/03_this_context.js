'use strict';

const o1 = {
    name : "o1",
    f1 : function(){

      return this;
    }
}

console.log(o1.f1()) ; // this de o1

const o2 = {
    name : "o2",
    f2 : o1.f1
}

// quel est le contexte pour this C EST O1
console.log(o1.f1().name);

// quel est le contexte pour le this C EST O2
console.log(o2.f2().name);


/**
 
function Model(name){
    this.name = name;
}
 

// On ne doit pas appeler cette fonction sans faire un new devant, pour créer un contexte <=> une instance 

Model("SOPHIE"); // JS prendre le contexte courant c'est-à-dire le this window du DOM

// Pour ne pas avoir cet effet de bord vous devez dans le fonction constructeur créer un contexte faire un new

const m = new Model("MICHEL"); // pas d'effet de bord on a un contexte this dans la fonction



"use strict";

function Model(name){
    this.name = name;
}

Model("SOPHIE"); // dans ce cas this est undefined 

*/