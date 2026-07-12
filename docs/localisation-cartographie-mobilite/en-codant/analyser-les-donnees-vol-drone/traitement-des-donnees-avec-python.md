# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Nous allons visualiser le parcours du drone à l'aide du fichier CSV contenant les informations de vol.<br/></p>
<p>1. Complétez le programme suivant :</p>
<p><i>import pandas</i></p>
<p><i>import folium</i></p>
<p><i>llat = []</i><br/></p>
<p><i>llong = []</i></p>
<p><i>vol = pandas.read_csv("drone_modif2.csv")</i></p>
<p><i>print(vol.info())</i></p>
<p><i># On relève la latitude et la longitude toutes les 50 lignes</i></p>
<p><i># à partir de la ligne 300 jusqu'à la dernière.</i></p>
<p><i>for i in range(...............................................):</i></p>
<p><i>    if i%50 == 0:</i></p>
<p><i>       llat.append(..............................................)</i></p>
<p><i>       llong.append(............................................)</i></p>
<p><i>nbval = len(llat)</i></p>
<p><i>c = folium.Map(location=[48.689966, 2.089861], zoom_start=17)</i></p>
<p><i># On marque la valeur de départ</i></p>
<p><i>folium.Marker([llat[0], llong[0]], popup="Départ").add_to(c)</i></p>
<p><i># On marque les positions sur la carte</i></p>
<p><i>for i in range(1, ......................):</i></p>
<p><i>    folium.Marker(................................................., popup=f"id{300+i*50}, lat {llat[i]}, long {llong[i]}").add_to(c)</i></p>
<p><i>c.save("carte.html")</i></p>
<p>Affichez la page carte.html dans votre navigateur pour visualiser le parcours. Le clic de la souris sur un marqueur affiche sa latitude et longitude ainsi que le numéro de la ligne du fichier CSV.</p>
<p>Vous allez maintenant réaliser le programme qui indique la vitesse maximale atteinte par le drone durant ce vol.<br/>Vous choisissez deux points sur la carte entre lesquelles la vitesse vous paraît la plus élevée. Repérez les lignes du fichier CSV auxquels ils appartiennent. Il suffit d'appliquer la formule vue dans "Calcul distance" pour trouver la vitesse.</p>
<p>2. Complétez le code suivant :</p>
<p><i>from math import sin, acos, cos, sqrt, pi</i></p>
<p><i># On choisit les ptA (1) et ptB (2) aux lignes 3400 et 3600</i></p>
<p><i>longa = vol.loc[3400, "LONGITUDE"]*pi/180</i></p>
<p><i>longb = .............................................................</i></p>
<p><i>lata = </i><i>.............................................................</i></p>
<p><i>latb = </i><i>.............................................................</i></p>
<p><i>t1 = vol.loc[3400, "DATE"]</i></p>
<p><i>t2 = </i><i>.................................................</i></p>
<p><i>t = (int(t2)-int(t1))/1000</i></p>
<p><i>d = 6378137*acos(</i><i>...................................................................................)</i></p>
<p><i>print("le drone a parcouru ", d, "m en ", t, "s")</i></p>
<p><i>v = .............................</i></p>
<p><i>print("sa vitesse est de ", v, "km/h")</i></p>
<p>Nous pouvions aussi calculer la vitesse entre ces deux points en utilisant la colonne "SPEED" du fichier CSV. Vous calculez la vitesse moyenne en prenant une série de valeurs de vitesse dans le fichier CSV et entre ces deux points.</p>
<p>3. Complétez le programme suivant :</p>
<p><i>v = []</i></p>
<p><i>for i in range(............................):</i></p>
<p><i>    v.append(........................................)</i></p>
<p><i>print("le drone vole à une vitesse de ", ..........................................., "km/h")</i><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
