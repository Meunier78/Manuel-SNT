# Préparation

<div class="imported-content">

<p>On utilise la bibliothèque <i>xml</i> pour le traitement des données.<br/></p>
<p>La méthode <i>parse</i> permet de convertir le fichier en arbre.<br/></p>
<p><i>arbre.getroot()</i> permet d'obtenir la racine de l'arbre (la première balise).</p>
<p>racine.findall("./FILMS/FILM/TITRE") permet d'obtenir la liste de tous les éléments de la balise, enfant de la balise elle-même enfant de la balise . On pourra récupérer le texte entre les balises  et  avec l'attribut <i>text</i> de l'élément : <br/></p>
<p><i>ltitre = racine.findall("./FILMS/FILM/TITRE")</i><br/><i>print("le premier film est", ltitre[0].text)</i><br/></p>
<p><br/></p>
<p>Une liste permet de stocker des éléments que l'on peut rappeler à l'aide de leurs indices :<br/></p>
<p><i>liste = ['a', 'b', 'c']</i></p>
<p><i>liste[0]</i> renvoie a    <i>liste[1]</i> renvoie b</p>
<p>Le nombre d'éléments d'une liste est obtenu par <i>len(nom de la liste)</i></p>
<p><i>len(liste)</i><i> </i>renvoie 3<br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
