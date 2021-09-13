// 0.2 <=> .2
function sumTTC(p1, p2, p3, tva = 0.2) {
  p1 = parseFloat(p1);
  p2 = parseFloat(p2);
  p3 = parseFloat(p3);
  tva = parseFloat(tva);

  // vérification du type des variables
  if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(tva)) {
    console.error(
      "L'une des valeurs n'est pas un nombre vérifier le type de vos prix"
    );

    return;
  }

  price = p1 + p2 + p3;

  return Math.floor(price * (1 + tva) * 100) / 100;
}

console.log(sumTTC(...[10, 189, 780]), (10 + 189 + 780) * 1.2);

const badPricesHT = [100.5, "hello", 55.7];
console.log(sumTTC(...badPricesHT, 0.3));
