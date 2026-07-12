# Préparation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Pour tracer des graphes, on utilise la bibliothèque dédiée « networkx » ainsi que la bibliothèque « matplotlib.pyplot ». </p>
<p><i>Import networkx as nx</i></p>
<p><i>import matplotlib.pyplot as plt</i></p>
<p>On fabrique un objet graphe nommé « <i>rsTwitter</i> » par exemple et on prépare des options pour le tracé :</p>
<p><i>rsTwitter</i><i> = nx.DiGraph()</i></p>
<p><i>options = {'node_color': 'pink', 'node_size': 2000, 'width': 3}</i></p>
<p>On ajoute les sommets (nœuds) : </p>
<p><i>rsTwitter.add_node("Alban") …</i> </p>
<p>et les arêtes : </p>
<p><i>rsTwitter.add_edge("Alban", "Béatrice") …</i></p>
<p>On affiche le graphe avec :</p>
<p><i>nx.draw(rsTwitter, with_labels=True, **options)</i></p>
<p><i>plt.draw()</i></p>
<p>On peut aussi afficher les sommets  avec <i>rsTwitter.edges()</i> et leur nombre avec <i>rsTwitter.number_of_edges()</i>.</p>
<p>On affiche les arêtes et leur nombre en utilisant <i>nodes()</i> et <i>number_of_nodes().</i></p>
<p>On peut également afficher le(s) centre(s), le diamètre et le rayon du graphe avec les fonctions <i>nx.center(rsTwitter)</i>, nx.<i>diameter(rsTwitter)</i> et nx.<i>radius(rsTwitter)</i></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
