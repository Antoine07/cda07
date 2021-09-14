const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}

// Aucun problème pour accéder à la fonction save et à son contexte qui le this de l'objet log
// log.save()

// ici la fonction save sera appelée par setTimeout donc dans son contexte 
// Dans ce cas, c'est point nouveau dans le cours, mais le contexte de la méthode save n'est pas passé à setTimeout
setTimeout(log.save, 1000);


// Pour ne pas avoir de problème de contexte vous devez vous même exécuter la méthode 

setTimeout(() => log.save(), 1000);


function One(){

    console.log(1);
}

setTimeout(One, 1000);