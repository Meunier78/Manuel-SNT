# Traitement des données avec Python

<div class="imported-content">

<p>Pour modéliser le réseau social de type twitter, vous allez :</p>
<p>1. Copier et compléter le programme suivant avec votre éditeur Python<br/></p>
<p>import networkx as nx<br/>import matplotlib.pyplot as plt</p>
<p>rsTwitter = nx.DiGraph()<br/>options = {<br/>    'node_color': ['skyblue', 'red', 'green', 'orange', 'magenta', 'pink', 'cyan', 'yellow', 'brown'],<br/>    "edgecolors": "black",  #couleur ligne autour des sommets<br/>    'node_size': 3000,  #diamètre des sommets<br/>    "linewidths": 2,    #largeur ligne autour des sommets<br/>    "font_size" : 10, "font_weight" : "bold", "font_color": "black",<br/>    "edge_color" : "red",   #couleur segments<br/>    'width': 3      #largeur segments<br/>}</p>
<p>title_font = {'size':'20', 'color':'black'}<br/>plt.figure(figsize=(10,8))  #largeur et hauteur de la figure<br/>plt.title("Graphe Réseau social type Twitter", **title_font)</p>
<p>rsTwitter.add_node("Alban")<br/><span># A compléter</span></p>
<p>rsTwitter.add_edge("Alban", "Béatrice")<br/><span># A compléter</span></p>
<p>nx.draw(rsTwitter, with_labels=True, **options)<br/>plt.show()<br/>plt.savefig("graphe.pdf")</p>
<p><br/></p>
<p><i>2. Ajouter les lignes de code qui permettent d'afficher dans la console : </i></p>
<ul><li><i>Le nombre de sommets et leurs noms</i><br/></li><li><i>Le nombre d'arêtes et  pour chacune, les sommets qui sont liés</i><br/></li><li><i>Le(s) centre(s) du graphe </i><br/></li><li>Le diamètre du graphe</li><li>Le rayon du graphe :</li><li>Les voisins d'Eric<br/></li></ul><p><br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
