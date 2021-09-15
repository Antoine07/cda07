# Sujet 01 populations

```js
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
```

1. Soit les données suivantes populations, ordonnez-les par ordre croissant par rapport à la longueur des noms.

*Indications : utilisez la méthode **sort**, cette méthode modifie le tableau. Vous pouvez lui passer une fonction (fléchée) pour calculer l'ordre par rapport à une clé du tableau ou un calcul spécifique. Reportez-vous à la documentation : [sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort).*

2. Ajoutez une clé **lenName** aux éléments du tableau populations vous assignerez la longueur de chaque nom à cette variable.

3. Regroupez maintenant dans un nouveau tableau groupNames les noms de même longueur (même nombre de caractères).

*Indications : Imaginez une structure de données (voir l'exemple ci-après), par exemple un tableau de tableau ou un Map, vous pouvez également utiliser **filter** pour regrouper les noms de même longueur dans le nouveau tableau groupNames*

Présentez les résultats recherchés comme suit par exemple :

```js
[
  [ { id: 12, name: 'Ian', lenName: 3 } ],
  [
    { id: 0, name: 'Alan', lenName: 4 },
    { id: 2, name: 'Jhon', lenName: 4 },
    { id: 5, name: 'Brad', lenName: 4 },
    { id: 6, name: 'Carl', lenName: 4 }
  ],
  [
    { id: 3, name: 'Brice', lenName: 5 },
    { id: 9, name: 'Edgar', lenName: 5 },
    { id: 10, name: 'Erika', lenName: 5 },
    { id: 11, name: 'Isaac', lenName: 5 }
  ],
  [
    { id: 1, name: 'Albert', lenName: 6 },
    { id: 7, name: 'Dallas', lenName: 6 },
    { id: 8, name: 'Dennis', lenName: 6 }
  ],
  [ { id: 4, name: 'Alexendra', lenName: 9 } ]
]
```

4. (Facultatif) Ajoutez une clé relation au tableau population et indiquez pour chaque personne les noms de ses relations. Ordonnez ces relations par ordre croissant de nombre de relation. Affichez la personne qui le plus de relation.

```js
const relations = [
  { id : 0 , relation : [1, 2, 4]},
  { id : 3 , relation : [7, 8]},
  { id : 4 , relation : [2, 7, 8, 11]},
  { id : 5 , relation : [1, 2, 4]},
  { id : 7 , relation : [2, 3, 5, 9]},
  { id : 9 , relation : [1, 2, 4, 8, 11]},
  { id : 11 , relation : [1, 2, 9, 10,]},
]
```