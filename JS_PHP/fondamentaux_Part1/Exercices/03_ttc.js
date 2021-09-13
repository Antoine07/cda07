// 0.2 <=> .2
function ttc(price, tva = 0.2) {
  // force le type des deux variables
  price = parseFloat(price);
  tva = parseFloat(tva);

  if (isNaN(price) || isNaN(tva)) {
    // les cotes couchées permettent de faire de l'interpolation : c'est -à-dire demander à JS d'interpréter les variables dans la chaîne de caractères, pensez à mettre ${} pour qu'il retrouve les variables.
    console.error(
      `L'une des valeurs passées à votre fonction n'est pas un nombre, vérifiez.`
    );

    // un return dans la fonction arrêtera les scripts 
    return; 
  }

  return Math.floor(price * (1 + tva) * 100) / 100;
}

// 1.
console.log(ttc("98", 0.2)); // 120
console.log(ttc(918.5, 0.2)); // 120.6
console.log(typeof ttc(918.5, 0.2));
// 2.
// Gestion du type
console.log(ttc("hello", 0.2)); // Erreur de type
console.log(ttc(100.5, "hello")); // Erreur de type
console.log(ttc("100", ".3")); // 130
