const fs = require("fs"); // module natif de node

const read = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);

        return;
      }
      // assignation par décomposition
      const { dragons } = JSON.parse(data);
      resolve(dragons);
    });
  });

read("./data/dragons.json")
  .then((dragons) => {
    let sens = 1;
    dragons.sort((d1, d2) => sens * (d1.age - d2.age));

    const oldest = dragons.slice(-1); // on part de la fin => on récupère le dernier élément.
    const youngest = dragons.slice(0, 1); // l'indice 0 et avance de 1 => donc prend le premier élément

    console.log(oldest, youngest); //

    // console.log(dragons.slice(-2, -1)); // avant dernier

    return dragons;
  })
  .then((dragons) => {
    let sens = -1;
    dragons.sort((d1, d2) => sens * (d1.age - d2.age));

    console.table(dragons);
  })
  .catch(console.error);
