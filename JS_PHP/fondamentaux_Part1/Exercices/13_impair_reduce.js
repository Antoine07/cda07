const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEven = numbers.reduce((acc, curr) => {
  if (curr % 2) acc += curr;

  return acc;
}, 0);

console.log(sumEven);

// de manière plus synthétique

console.log(numbers.reduce((acc, curr) => (curr % 2 && acc + curr) || acc));

const numbersBis = [2, 4, 6, 10];
