const students = [ "Alan", "Philippe", "Tony", "Geraldine", "Michelle", "Phi" ];

students.sort((st1, st2) => st1.length - st2.length);
console.log(students);

const numbers = [ 10, 7, 5, 1, 10, 5];

numbers.sort((a, b) => a - b);
console.log(numbers);
