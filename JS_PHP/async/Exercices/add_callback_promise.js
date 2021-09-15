"use strict";

const TIMER = 100;

const add = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseFloat(number) != number)
        reject(`Is not a number : ${number}`);
      else resolve(parseFloat(number));
    }, TIMER);
  });

add(1)
  .then((number) => add(number + 2)) // resolve
  .then (number => add("Bonjour" + number ))
  .then((number) => add(number + parseFloat("3")))
  .then((number) => add(number + 3))
  .then((number) => add(number + 3))
  .then( number => number  ) // une promesse renvoie une promesse
  .then(console.log) // petite astuce pour exécuter le console.log
  .catch((error) => console.error('error ICI', error)); // reject avec votre new Error
