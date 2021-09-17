
# Sujet 02 suite du sujet sur la calculatrice

On aimerait maintenant mettre en place une page HTML/CSS pour que des utilisateurs Web utilisent notre calculatrice.

### Organisation et présentation des résultat

Faites un dossier CalculatorV1 et dans celui-ci créez un fichier Calculator.php pour la classe, un fichier index.php
qui traitera les données, c'est dans ce fichier que vous importerez la classe Calculator.php et que vous traiterez le formulaire
de la calculatrice. Le fichier show.php gérera l'affichage de la calculatrice, suivez le wireframe ci-dessous pour cette page:

Notez que la cible des formulaires sera le fichier index.php

```
        Calculatrice
        
Formulaire 1                                              Formulaire 2 

Nombre 1 :[  ]                                            Calculer la moyenne:                                                []  
Nombre 2 :[  ]                                            Saisir les nombres dans le champs suivant en les séparants par 
                                                          une virgule:
                                                          [           ]
Opérateur: [ addition, multiplication, soustraction ]     [Calculer]

[Calculer]

```

Une fois que l'on a envoyé le formulaire, cible index.php, vous afficherez le résultat dans la même page show.php, faites une condition sur 
une variable result = null pour afficher les formulaires ou le résultat lui-même. Un bouton pour revenir à la page présentant
les deux formulaires de calcul sera également présent dans cette page, voyez le wireframe suivant:

```
résultat: 10
[revenir aux formulaires]

```
