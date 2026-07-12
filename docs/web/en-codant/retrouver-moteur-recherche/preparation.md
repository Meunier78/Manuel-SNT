# Préparation

<div class="imported-content">

<p>Pour convertir une chaîne de caractères en une liste en utilisant l'espace comme séparateur, on peut utiliser la méthode split :</p>
<p><i>chaine = "toto le héro"</i></p>
<p><i>chaine.split(" ")</i> renvoie ['toto', 'le', 'héro']</p>
<p>Pour connaître l'index d'un élément dans une liste on utilise la méthode index.</p>
<p><i>ma_liste = [1, "a", "toto"]</i></p>
<p><i>ma_liste.index("a")</i> renvoie 1</p>
<p>On peut ajouter un élément avec :</p>
<p><i>a = 3</i><br/><i>ma_liste += [f"{a}"]</i> renvoie [1, "a", "toto", '3'] # entier convertit en caractère</p>
<p>et si l'on veut que cet élément (un entier) soit affiché sur deux chiffres,</p>
<p><i>ma_liste += [f"{a:02}"]</i> renvoie [1, "a", "toto", '03']</p>
<p>On peut réduire la liste en enlevant le premier et le dernier élément de la liste avec :</p>
<p><i>ma_liste[1, -1]</i> renvoie ["a", "toto"]<br/></p>
<p>On peut parcourir toute la liste et donner l'index de chaque élément sur deux chiffres :</p>
<p><i>for i in ma_liste:</i><br/><i>    print(i, "a pour indice ", f"{ma_liste.index(i):02}") renvoie </i><i>1 a pour indice  00</i><br/><i>                                                                                                        a a pour indice  01</i><br/><i>                                                                                                        toto a pour indice  02</i><br/><i>                                                                                                       3 a pour indice  03</i><br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
