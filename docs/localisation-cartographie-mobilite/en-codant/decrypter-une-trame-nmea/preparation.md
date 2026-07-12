# Préparation

<div class="imported-content">

<p>Pour convertir une chaîne de caractères en une liste en utilisant la virgule comme séparateur, on peut utiliser la méthode split :</p>
<p><i>chaine = "1,2,3"</i></p>
<p><i>chaine.split(",")</i> renvoie ['1', '2', '3']</p>
<p>Pour connaître l'index d'un élément dans une liste, on utilise la méthode index.</p>
<p><i>ma_liste = ["1", "a", "toto"]</i></p>
<p><i>ma_liste.index("1")</i> renvoie 0<br/></p>
<p><i>ma_liste.index("a")</i> renvoie 1</p>
<p>Pour connaître l'élément depuis l'index :</p>
<p><i>ma_liste[2]</i> renvoie toto</p>
<p>ma_liste[:2] renvoie les deux premiers éléments : "1" et "a"</p>
<p>ma_liste[1:] renvoie tous les éléments à partir de 1 : "a" et "toto"</p>
<p>Pour convertir un caractère d'une liste en nombre entier <b>int</b> ou réel <b>float</b> :</p>
<p><i>int(maliste[0])</i> renvoie 1</p>
<p>La bibliothèque folium permet d'ouvrir une carte et d'afficher des points. Les fonctions nécessaires sont les suivantes :</p>
<p><i>m = folium.Map(location=[43.29695, 5.38107])</i> : pour créer une carte "m" centrée sur les coordonnées GPS données. On peut ajouter l'option zoom_start=12 pour obtenir un zoom particulier.<br/><i>folium.Marker([43.29695, 5.38107],popup="lieu recherché").add_to(m) </i>: pour ajouter un marqueur et un commentaire.<br/><i>m.save("carte.html")</i> : pour sauvegarder la carte au format HTML que l'on peut visualiser avec un navigateur.</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
