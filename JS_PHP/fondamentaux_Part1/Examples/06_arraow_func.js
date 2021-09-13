const power2 = (x) => {
    return x ** 2 ;
  };

console.log( power2(5) );

const numbers = [1, 2, 5];

console.log( power2(5) );

/*
map, s'appliquer uniquement sur un tableau JS, parcourir un tableau pour chaque élément et avoir la possiblité d'effectuer un traitement sur chaque élément de ce tableau. Cette fonction map retourne un nouveau tableau
*/

console.log(numbers.map((x) => {
    return x**2;
}));


// si vous avez qu'une seule chose à retourner vous pouvez utiliser la syntaxe suivante 
console.log(numbers.map (x => x**2) );