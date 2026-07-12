# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>On souhaite indexer les six pages web "Représentation de pages web". On utilise une fonction <i>surfeur</i> qui parcours 100 fois les pages de façon aléatoire et une fonction <i>populaire</i> qui indique la page ayant obtenue le meilleur score.<br/></p>
<p>1. Complétez le programme python suivant :</p>
<p><i>from random import randint</i></p>
<p><i>def surfeur(pages, compteurs):</i></p>
<p><i>    page = pages[0] # on part de la page A</i></p>
<p><i>    for _ in range(100):    # répète 100 fois</i></p>
<p><i>        s = randint(0, 5) # choisir l'un des six compteurs aléatoirement</i></p>
<p><i>        if page == 'A':     # de A</i></p>
<p><i>            if s &lt; 3:</i></p>
<p><i>                compteurs[1] += 1   # on va vers la page B</i></p>
<p><i>                page = pages[1]</i></p>
<p><i>            elif 5 &gt; s &gt; 2:</i></p>
<p><i>                compteurs[2] += 1   # on va vers la page C</i></p>
<p><i>                page = pages[2]</i></p>
<p><i>            elif s &gt; 4:</i></p>
<p><i>                compteurs[3] += 1   # on va vers la page D</i></p>
<p><i>                page = pages[3]</i></p>
<p><i>        elif page == 'B':</i></p>
<p><i>            ..........# A compléter, plusieurs lignes !</i></p>
<p><i>    return compteurs</i></p>
<p><br/></p>
<p><i>def populaire(pages, compteurs):</i></p>
<p><i>    </i><i>..........# A compléter, plusieurs lignes !</i></p>
<p><i>    return pages[id]</i></p>
<p><br/></p>
<p><i>pages = ['A', 'B', 'C', 'D', 'E', 'F']</i></p>
<p><i>compteurs = [1, 0, 0, 0, 0, 0]  # la page A vaut 1, les autres 0</i></p>
<p><i>compteurs = surfeur(pages, compteurs)</i></p>
<p><i>print(pages)</i></p>
<p><i>print(compteurs)</i></p>
<p><i>pagep = populaire(pages, compteurs)</i></p>
<p><i>print("La page la plus populaire est la page ", pagep)</i></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
