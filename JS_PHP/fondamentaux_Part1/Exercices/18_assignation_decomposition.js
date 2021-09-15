const student = {
  name: "Alan",
  notes: ["12", 8],
  average: null,
};

const calculAvg = (notes, prec = 100) => {
  notes = notes.filter((n) => isNaN(n) === false).map(parseFloat);

  if (notes.length) {
    let sum = notes.reduce((acc, curr) => acc + curr);

    return Math.floor((sum / notes.length) * prec) / prec;
  }

  return null;
};

const { notes, name: Name } = student;
student.average = calculAvg(notes);

const { average } = student;
console.log(Name, notes, average);
