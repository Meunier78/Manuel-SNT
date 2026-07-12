# Aide sur les fonctions

<div class="imported-content">

<h2><b>Exercice 1</b></h2><p><b>encode64(codein)</b> : dictionnaire qui permet de traduire un caractère en un code binaire sur six bits. Pour le caractère "r" ce sera '<span style=" background-color:#ffa900;display:inline-block;">101011</span>'.<br/></p>
<p><b>stegano(pixel, code)</b> : permet d'insérer le code binaire sur six bits dans les trois octets RVB d'un pixel. Exemple : soit le premier pixel de l'image dataimage[0] = (<span style=" background-color:#ffa900;display:inline-block;">35, 56, 39</span>), que l'on peut traduire en binaire par (0010 00<span style=" background-color:#fffb00;display:inline-block;">11</span>, 0011 10<span style=" background-color:#fffb00;display:inline-block;">00</span>, 0010 01<span style=" background-color:#fffb00;display:inline-block;">11</span>). Il faut remplacer les deux bits de poids faible (ceux de droite !) de ces trois valeurs par les six bits du code avec l'opération (pixel[0]&amp;0b11111100)|(int(code[0])*2+int(code[1])) pour la composante rouge. 0010 00<span style=" background-color:#fffb00;display:inline-block;">11</span> devient 0010 00<span style=" background-color:#fffb00;display:inline-block;">10</span>, 0011 10<span style=" background-color:#fffb00;display:inline-block;">00</span> devient 0011 10<span style=" background-color:#fffb00;display:inline-block;">10</span> et 0010 01<span style=" background-color:#fffb00;display:inline-block;">11</span> devient 0010 01<span style=" background-color:#fffb00;display:inline-block;">11</span> . Finalement, le pixel vaut (<span style=" background-color:#ffa900;display:inline-block;">34, 58, 39</span>).<br/></p>
<h2><b>Exercice 2</b></h2><p><b>decode64(codein)</b> : dictionnaire qui permet de traduire un code binaire sur six bits en  un caractère. Pour le code '101011' ce sera "r".<br/></p>
<p><b>decode(pixel)</b> : permet d'extraire le code binaire sur six bits des trois octets RVB d'un pixel. Exemple : soit le premier pixel de l'image dataimage[0] = (<span style=" background-color:#ffa900;display:inline-block;">34, 58, 39</span>), que l'on peut traduire en binaire par (0010 00<span style=" background-color:#fffb00;display:inline-block;">10</span>, 0011 10<span style=" background-color:#fffb00;display:inline-block;">10</span>, 0010 01<span style=" background-color:#fffb00;display:inline-block;">11</span>). Il faut extraire les deux bits de poids faible (ceux de droite !) de ces trois valeurs puis les recomposer pour former les six bits du code (<span style=" background-color:#ffa900;display:inline-block;">101011</span>).<br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
