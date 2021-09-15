# read json dragon

Vous allez utiliser un module node "fs" qui permet de lire un fichier, voici une syntaxe de base pour lire un fichier, récupérez le fichier data/dragons.json sur le serveur et testez le code ci-dessous :

```js
// module natif de Node.js
const fs = require('fs');

fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
    // impossible de lire le fichier
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    // success
    // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
    console.log('File data:', JSON.parse(data)) 
})
```

1. Changez le code ci-dessus et utilisez une **promesse** pour gérer la récupération des données au format JSON Object dans JS. (voir la fonction add promise)

2. Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.

3. Quel est le nom du dragon le plus jeune ? Faite un script pour répondre à cette question.

4. Récupérez les dragons et ordonnées les par age décroissant.