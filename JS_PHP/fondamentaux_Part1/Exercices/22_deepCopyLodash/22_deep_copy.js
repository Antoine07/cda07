// const lodash = require('lodash');
const _ = require("lodash"); // _ donne un nom très court pour le module

// source de vérité on verra cela dans des librairies comme React
const students = [
  {
    name: "Alan",
    address: [{ street: "Chateau" }, { street: "Cholvy" }],
    family: {
      mother: "Isa",
      father: "Philippe",
      sister: "Sylvie",
    },
    age: 35,
    notes: [11, 12, 15],
  },
  {
    name: "Bernard",
    address: [{ street: "La Place" }, { street: "Lewis Carrol" }],
    family: {
      mother: "Particia",
      father: "Cécile",
      sister: "Annie",
    },
    age: 55,
  },
];

const newStudents = _.cloneDeep(students);

newStudents[0].address[0].street = "Paris";

console.log(newStudents[0].address[0]);
console.log(students[0].address[0]);

// Clone deep à la mains
const deepCopyStudents = (students) => {

  return students.map((st) => {
    const { age, name, address, family, notes } = st;

    const newAdress = address.map((a) => ({ ...a }));
    const newFamily = { ...family };

    if(notes){
      const newNotes = notes.map(n=>n);

      return(
        {age, name, address : newAdress, family : newFamily, notes : newNotes}
      )
    }

    
    return(
      {age, name, address : newAdress, family : newFamily}
    )
  });
};

const newNewStudents = deepCopyStudents(students);
newNewStudents[0].address[0].street = "Paris";

console.log(newNewStudents[0].address[0]);
console.log(students[0].address[0]);

// ------------------------------ //


const A = { a : 1, b : 2};

const B = { ...A };
const C = A;

console.log( A == B );
console.log( A == C );
