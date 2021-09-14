const occurences = [11, 10, 5, 1, 2, 10, 13, 10, 9, 10, 2.2];

const nb10 = occurences.filter((num) => num == 10).length;
console.log(nb10);

//
const PREC = 100;
let sum = 0,
  avg = 0,
  nbOcc = occurences.length;

for (const occ of occurences) sum += occ;

if (nbOcc > 0) {
  avg = Math.floor((sum / nbOcc) * PREC) / PREC;
}

console.log(avg);

const separateNotes = [occurences.filter(num => num < avg), occurences.filter(num => num >= avg)];


console.table(separateNotes);


