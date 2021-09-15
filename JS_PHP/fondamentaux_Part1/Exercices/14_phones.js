// objet 1 phone
const phones = [
    { name: "iphone XX", priceHT: 900 }, // objet 2
    { name: "iphone X", priceHT: 700 }, // objet 3
    { name: "iphone B", priceHT: 200 }, // objet 4
  ];

// phones.map( phone => {
//     phone.priceTTC = null;
// });

// console.log(phones);

// Faisons une copie profonde
// Map retourne un nouveau tableau et on s'arrange dans le map pour créer à chaque fois un nouvel objet
const newPhones = phones.map( phone => {
    

    return ({ ...phone , priceTTC : phone.priceHT * 1.2 }) // nouvel objet  copie avec le spread operator
});

console.log(newPhones);
console.log(phones);

