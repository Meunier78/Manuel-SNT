# Préparation

<div class="imported-content">

<p>Une liste d'éléments en python s'écrit :<br/></p>
<p><i>une_liste = ['a', 'b', 'c'] </i>avec 0, 1, 2 les indices respectifs de a, b et c. On peut obtenir le deuxième élément avec :</p>
<p><i>une_liste[1]</i> renvoie b</p>
<p>On peut obtenir l'indice du troisième élément (c) avec :</p>
<p><i>une_liste.index('c')</i> renvoie 2</p>
<p>On peut connaitre le nombre d'éléments dans la liste avec la fonction <b>len</b> :</p>
<p><i>len(une_liste)</i> renvoie 3</p>
<p>On peut concaténer une liste avec une autre :</p>
<p><i>une_liste + ['d']</i> renvoie [<i>'a', 'b', 'c', 'd'] </i></p>
<p>Pour choisir un élément aléatoirement dans une liste, on utilise <b>choice</b> du module <b>random</b> que l'on importe avec :</p>
<p><i>from random import choice</i></p>
<p>Il suffit ensuite d'appeler la fonction :</p>
<p><i>choice(une_liste)</i>  renvoie b</p>
<p>Pour mélanger une liste on utilise shuffle du module <b>random</b></p>
<p><i>shuffle(une_liste)</i></p>
<p>join permet de convertir une liste de caractères en chaîne de caractères :</p>
<p><i>''.join(une_liste)</i> renvoie abcd</p>
<p>Pour mettre un caractère en majuscule on utilise la méthode upper et pour mettre en minuscule, la méthode lower :</p>
<p><i>'a'.upper()</i> renvoie A</p>
<p><i>'A'.lower()</i> renvoie a</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
