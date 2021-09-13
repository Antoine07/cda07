function calcul(a, b) {
  console.log(a + b);
}

calcul(1);

function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

// le spread operator ... déballe les éléments se trouvant dans le tableau pour les distribuer aux paramètres de la fonction.
console.log(sum(...numbers));

let num = [...[1, 2, 3], 8, 10 ];

console.log(num);
