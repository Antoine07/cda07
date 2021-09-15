const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

// 1 Ordonnez par rapport à la longueur des noms

// sort ordonne les caractères de base et pas les nombres donc si on veut le forcer à ordonner des nombres il faut passer à la fonction une fonction de calcul
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers); // modifier la position des éléments par référence

populations.sort((p1, p2) => p1.name.length - p2.name.length);

console.log(populations);

// 2.
for (const pop of populations) {
  pop.lenName = pop.name?.length; // ? permet de vérifier que pop.name existe sans lever une erreur
}

console.log(populations);

// 3. groupNames
const groupNames = [];
const test = []; // ranger les longueurs traitées
for (const pop of populations) {
  // on récupère la longueur des noms
  const ln = pop.lenName;
  // si cette longueur a déjà été traitée on passe à l'itération suivante
  if (test.includes(ln)) continue;

  // SINON on récupère l'ensemble des personnes ayant la même longueur de nom
  groupNames.push(populations.filter((pop) => pop.lenName == ln));
  // On n'oublie pas de garder en mémoire la longueur que l'on vient de traiter pour le refaire se traitement
  test.push(ln);
}

console.log(groupNames);

// continue et break

for (const num of [1, 2, 3, 4]) {
  // avec continue il passe à l'itération suivante, attention break par contre sort de la boucle
  if (num % 2) continue;

  console.log(num);
}

// ici dès le départ 1 % 2 = 1 c'est vrai donc on exécute break et sort de la boucle rien ne s'affiche
for (const num of [1, 2, 3, 4]) {
  // avec continue il passe à l'itération suivante, attention break par contre sort de la boucle
  if (num % 2) break;

  console.log(num);
}
