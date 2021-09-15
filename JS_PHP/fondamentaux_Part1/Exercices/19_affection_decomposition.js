const students = [
  {
    name: "Alan",
    family: {
      mother: "Isa",
      father: "Philippe",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Particia",
      father: "Cécile",
      sister: "Annie",
    },
    age: 55,
  },
];

// utiliser du singulier pour lister quelque chose de pluriel 
for (const student of students) {
    // assignation par décomposition dans la portée de votre boucle aucun problème
  const {
    name,
    family: { sister },
  } = student;

  // utilisez l'interpolation pour afficher vos contenus dans une chaîne de caractères 
  console.log(`Name ${name} sister : ${sister}`);
}
