// 1. Mettre les nombres strictement supérieur à 3 au carrés dans le tableau suivant, retournez un nouveau tableau.

// 2. Mettez les nombres impairs à la puissance 3, retournez les résultats dans un nouveau tableau.

// 3. Mettez les nombres multiple de 5 à la puissance 3, retournez les résultats dans un nouveau tableau.

// Indications : pour les questions 2 et 3 utilisez un modulo.

const numbers = [1, 2, 0, 45, 3, 7, 19, 100];

// 1.
// map retourne un tableau
const numSquare = numbers.map((num) => {
  if (num > 3) return num ** 3;

  return num;
});

console.log(numSquare);

// 2.
const numOdd = numbers.map((num) => {
  if (num % 2) return num ** 3;

  return num;
});

console.log(numOdd);

// 2.bis plus court
const numOddBis = numbers.map((num) => (num % 2 ? num ** 3 : num));
console.log(numOddBis);

// 3. Multiple de 5
const numbMult5 = numbers.map((num) => (num % 5 === 0 ? num ** 3 : num));
console.log(numbMult5);

// On augmente de 5% toutes les notes des étudiants
const students = [
  { s: 1, note: 19 },
  { s: 2, note: 10 },
  { s: 3, note: 13 },
];

students.map((student) => {
  student.note = student.note * 1.05; // modification par référence dans les student (objet)

  return student;
});

// Attention passage par référence le tableau students a été modifié
console.log(students);

// Faire une copie de chaque objet pour le séparer de la mémoire 

// Maintenant on décide de faire une augmentation de 10% mais on souhaite séparer de la mémoire students et le nouveau résultat