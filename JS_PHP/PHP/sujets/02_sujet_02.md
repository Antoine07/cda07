
# Sujet 02 suite du sujet sur la calculatrice

On aimerait maintenant mettre en place une page HTML/CSS pour que des utilisateurs Web utilisent notre calculatrice.

### Organisation et présentation des résultat

Faites un dossier CalculatorV1 et dans celui-ci créez un fichier Calculator.php pour la classe, un fichier index.php
qui traitera les données, c'est dans ce fichier que vous importerez la classe Calculator.php et que vous traiterez le formulaire
de la calculatrice. Le fichier show.php gérera l'affichage de la calculatrice, suivez le wireframe ci-dessous pour cette page:

Notez que la cible des formulaires sera le fichier index.php

```
        Calculatrice
        
Formulaire 1                                              

Nombre 1 :[  ]                                            
Nombre 2 :[  ]                                            
                                                          
Opérateur: [ addition, multiplication, soustraction ]     

[Calculer]

```

Une fois que l'on a envoyé le formulaire, cible index.php, vous afficherez le résultat dans la même page show.php, faites une condition sur une variable result = null pour afficher le formulaire ou le résultat lui-même. 

Un bouton permettra de revenir sur la page affichant le formulaire :

```
résultat: 10
[revenir aux formulaires]

```

## Partie faculative

Créez un deuxième formulaire pour effectuer le calcul de la moyenne

```text
Formulaire 2 

Calculer la moyenne   
Saisir les nombres dans le champs suivant en les séparants par une virgule:
[12, 15, 18]
[Calculer]
```
