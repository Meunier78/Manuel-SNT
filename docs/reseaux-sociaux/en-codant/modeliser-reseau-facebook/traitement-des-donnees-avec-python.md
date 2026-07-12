# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Pour modéliser un réseau social de type facebook, nous allons :</p>
<p>1. Copiez et complétez le programme suivant avec votre éditeur Python<br/></p>
<p><i>import networkx as nx</i><br/><i>import matplotlib.pyplot as plt</i></p>
<p><i>rsFacebook = nx.Graph()</i></p>
<p><i>options = {</i><br/><i>    "node_color": ['skyblue', 'red', 'green', 'orange', 'magenta', 'pink', 'cyan', 'yellow', 'brown'],</i><br/><i>    "edgecolors": "black", #couleur ligne autour des sommets</i><br/><i>    "node_size": 3000, #diamètre des sommets</i><br/><i>    "linewidths": 2, #largeur ligne autour des sommets</i><br/><i>    "font_size" : 10, "font_weight" : "bold", "font_color": "black",</i><br/><i>    "edge_color" : "red", #couleur segments</i><br/><i>    "width": 3, #largeur segments</i><br/><i>    'with_labels': True</i><br/><i>}</i><br/><i>title_font = {'size':'20', 'color':'black'}</i><br/><i>plt.figure(figsize=(10,8)) #largeur et hauteur de la figure</i><br/><i>plt.title("Graphe Réseau social type Facebook", **title_font)</i></p>
<p><i>rsFacebook.add_node("Alban")</i><br/><i># A compléter</i></p>
<p><i>rsFacebook.add_edge("Alban", "Béatrice")</i><br/><i># A compléter</i></p>
<p><i>nx.draw(rsFacebook, **options)</i><br/><i>plt.show()</i></p>
<p><br/></p>
<p><i>2. Ajoutez les lignes de code qui permettent d'afficher dans la console : </i></p>
<ul><li><i>Le nombre de sommets et leurs noms</i><br/></li><li><i>Le nombre d'arêtes et  pour chacune, les sommets qui sont liés</i><br/></li><li><i>Le(s) centre(s) du graphe </i><br/></li><li>Le diamètre du graphe</li><li>Le rayon du graphe</li><li>Les voisins de Fabrice<br/></li></ul><p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
