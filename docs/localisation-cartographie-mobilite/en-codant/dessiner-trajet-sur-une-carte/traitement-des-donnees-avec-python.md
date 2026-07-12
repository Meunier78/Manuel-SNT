# Traitement des données avec Python

<div class="imported-content">

<p>On souhaite se rendre à pied, de la place de l'étoile [48.8735, 2.2959] à la tour Eiffel [48.8591, 2.2935]. <br/></p>
<p>Pour centrer la carte, on calculera le milieu géométrique du segment reliant le point de départ et le point d'arrivée. On centrera la carte sur ce point.</p>
<p>1. Complétez le programme suivant :</p>
<p>from pyroutelib3 import Router<br/>import folium</p>
<p>depart = ..............................................<br/>arrivee = .....................................................<br/>milieu = [.....................................................................]</p>
<p>m = folium.Map(location=milieu, zoom_start=15)</p>
<p>folium.Marker(depart, popup="Départ").add_to(m)<br/>folium.Marker(.................................................).add_to(m)</p>
<p>router = Router("foot")<br/>point_depart = ......................................................<br/>point_arrivee = ........................................................<br/>status, route = router.doRoute(point_depart, point_arrivee)<br/>if status == 'success':<br/>    etapes = list(map(router.nodeLatLon, route))<br/>    folium.PolyLine(etapes, color="green", weight=5, opacity=0.7).add_to(m)</p>
<p>m.save("carte.html")</p>
<p><br/></p>
<p>La fonction <i>calcul_dist</i> permet de déterminer la distance parcourue.</p>
<p>2. Visualisez également ce trajet pour un déplacement en taxi et à vélo et affichez les distances correspondantes.</p>
<p><br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
