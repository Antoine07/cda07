const notes = [11, 10, 5, 1, 2, 1, 13, 10, 9, 1.2, 2.2];

const students = [
  {name : "Alan", avg : 10.5},
  {name : "Sophie", avg : 9.5},
  {name : "Bernard", avg : 10},
  {name : "Alice", avg : 12},
  {name : "Lucie", avg : 14},
  {name : "Michel", avg : 19},
  {name : "Antoine", avg : 10},
  {name : "Phil", avg : 11},
  {name : "Caroline", avg : 7},
  {name : "Paul", avg : 8},
];

const notesInf5 = notes.filter(num => num < 5);
console.table(notesInf5);

const stAvgSup = students.filter(student => student.avg > 10);
console.table(stAvgSup);
