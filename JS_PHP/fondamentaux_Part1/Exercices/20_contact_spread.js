const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];

// on peut utiliser la fonction concat de JS
const strContact = str1.concat(str2);
console.log(strContact);

const strContact2 = [ ...str1, ...str2 ];
console.log(strContact2);

