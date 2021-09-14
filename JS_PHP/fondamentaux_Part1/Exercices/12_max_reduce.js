const numbers = [1, 2, 3, 4, 57, 6, 7, 8, 9, 10];

let numMax = 0;

for (const num of numbers) {
  if (numMax < num) numMax = num;
}

console.log(numMax);

// Max
console.log(
  numbers.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  })
);

// Min
console.log(
  numbers.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
  })
);

// Min & Max

const minMax = numbers.reduce(
  (acc, curr) => ({
    min: curr < acc.min ? curr : acc.min,
    max: curr > acc.max ? curr : acc.max,
  }),
  { min: numbers[0], max: numbers[0] }
);

console.log(minMax);
