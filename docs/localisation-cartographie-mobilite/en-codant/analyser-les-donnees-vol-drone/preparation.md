# Préparation

<div class="imported-content">

<p>Téléchargez le fichier CSV en le renommant "drone.csv".</p>
<p>Pour traiter des données, nous allons utiliser la bibliothèque Python Pandas qui permet la manipulation et l'analyse des données. On donne :</p>
<p><i>import pandas</i><br/><i>vol = pandas.read_csv("drone.csv") #L’objet « vol » contient le fichier</i></p>
<p>Vous pouvez obtenir des informations sur le fichier csv avec :</p>
<p><i>print(vol.info())</i></p>
<p>Il est possible de récupérer certaines données du tableau, par exemple certaines lignes, certaines colonnes ou bien encore des valeurs uniques. Pour cela, on utilise la méthode « loc » avec les index des lignes et les index des colonnes. Le principe de fonctionnement de « loc » est relativement simple puisque l'on utilise une instruction de la forme « vol.loc[index_ligne, index_colonne] ».<br/> On peut aussi récupérer toutes les lignes d’une colonne « vol.loc[:, index_colonne] » ou toutes les colonnes d’une ligne « vol.loc[index_ligne, :] ». Index_ligne ou index_colonne peut prendre la forme d’un numéro ou d’un test.</p>
<p><b>Exemple</b></p>
<p>Sur la première ligne du tableau (index 0) :<br/><i>vol.loc[0, "LATITUDE"]</i> renvoie 48.691319</p>
<p><i>vol.loc[0, ["DATE", "LATITUDE", "LONGITUDE"]]</i> renvoie DATE 1683987460055    LATITUDE  48.691319    LONGITUDE 2.091055</p>
<p>DATE contient une chaîne de caractères au format Timestamp. Le Timestamp désigne le nombre de millisecondes écoulées depuis le 1<sup>er</sup> janvier 1970 à minuit.</p>
<p>Pour convertir une chaîne de caractères en une liste en utilisant la virgule comme séparateur, on peut utiliser la méthode split :</p>
<p><i>chaine = "1,2,3"</i></p>
<p><i>chaine.split(",")</i> renvoie ['1', '2', '3']</p>
<p>Pour connaître l'index d'un élément dans une liste, on utilise la méthode index.</p>
<p><i>ma_liste = ["1", "a", "toto"]</i></p>
<p><i>ma_liste.index("1")</i> renvoie 0<br/></p>
<p><i>ma_liste.index("a")</i> renvoie 1</p>
<p>Pour connaître l'élément depuis l'index :</p>
<p><i>ma_liste[2]</i> renvoie toto</p>
<p>Pour convertir un caractère d'une liste en nombre entier <b>int</b> ou réel <b>float</b> :</p>
<p><i>int(maliste[0])</i> renvoie 1</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
