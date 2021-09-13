"use strict";

// En mode strict vous serez obligé de faire un new devant la fonction constructeur
function Model(name){
    this.name = name;
    console.log(this);
}

// Model("SOPHIE"); // dans ce cas this est undefined 

const m = new Model("SOHPIE");

let solde = 1000000;

function effe_bord(){
    solde = solde - 1000000;
}

effe_bord();

console.log("Combien sur mon compte", solde);