const student = { name: "Alan", age: 45 };

// les deux objets sont liés
// const newStudent = student;

// La bonne solution c'est d'utiliser le spread operator

const newStudent = { ...student };
