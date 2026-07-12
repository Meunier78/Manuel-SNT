# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>On donne la chaîne de caractères <i>pos</i> représentant une trame NMEA. Il faut :</p>
<ul><li>convertir <i>pos</i> en liste (<i>lpos</i>),</li><li>extraire les nombres représentant la latitude <i>nlat</i> et la longitude <i>nlong</i>,</li><li>calculer la latitude <i>lat</i> et la longitude <i>long</i> et</li><li>les afficher dans la console.</li></ul><p>1. Complétez le programme suivant :</p>
<p><i>pos = "$GPGGA,123036.000,4850.8593,N,00220.6853,E,1,9,0.95,68.7,M,47.3,M,*6F"</i><br/><i>lpos =..................................... # renvoie ['$GPGGA','123036.000','4850.8593','N',...]</i><br/><i>nlat = ..................................... # renvoie 4850.8593</i><br/><i>nlong = ...........................................</i></p>
<p><i>lat = ................................................................... # renvoie 48.84765499</i><br/><i>long = ..................................................................................</i></p>
<p><i>print("latitude :", lat, " longitude :", long)</i></p>
<p><br/></p>
<p>On souhaite localiser sur une carte de France les coordonnées relevées par le capteur GPS. Nous utilisons le langage Python avec la bibliothèque « folium ».<br/></p>
<p>2. Complétez le programme suivant :</p>
<p><i>import folium</i><br/><i>m = ...........................................................................................</i><br/><i>folium.Marker(.............................................................).add_to(m)</i><br/>m.save("carte.html")<br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
