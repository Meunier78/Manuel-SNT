# Préparation

<div class="imported-content">

<p>La bibliothèque folium permet d'ouvrir une carte et d'afficher des points repérés par la latitude et la longitude.<br/></p>
<p>Les fonctions nécessaires sont les suivantes :</p>
<p><i>m = folium.Map(location=[43.29695, 5.38107])</i> : pour créer une carte "m" centrée sur les coordonnées GPS données. On peut ajouter l'option zoom_start=12 pour obtenir un zoom particulier.<br/><i>folium.Marker([43.29695, 5.38107],popup="lieu recherché").add_to(m) </i>: pour ajouter un marqueur et un commentaire.<br/><i>m.save("carte.html")</i> : pour sauvegarder la carte au format HTML que l'on peut visualiser avec un navigateur.</p>
<p>Nous utilisons la classe Router de la bibliothèque "pyroutelib3" pour déterminer une route. Les fonctions nécessaires sont les suivantes :</p>
<ul><li><i>router = Router("mode de transport")</i>, création de l'objet router avec comme mode de transport : car, cycle, foot, horse, tram, train</li><li><i>point_depart = router.findNode(*depart)</i>, pour définir un point de départ où *depart représente une liste contenant la lattitude et la longitude <i>depart = [48.8735, 2.2959]</i></li><li><i>status, route = router.doRoute(point_depart, point_arrivee)</i>, détermine la route si possible (status)</li><li><i>etapes = list(map(router.nodeLatLon, route))</i>, représente les différents points de la route</li><li><i>folium.PolyLine(etapes, color="green", weight=5, opacity=0.7).add_to(m)</i>, ajoute le tracé de la route dans la carte.</li></ul>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
