# Présentation

<div class="imported-content">

<p>Bob souhaite envoyer un message secret à Alice. Il décide de cacher son message dans une image selon le principe de la stéganographie. Voici comment il s'y prend :</p>
<ul><li>Il chiffre d’abord le message à l’aide d’un code (base 64) sur 6 bits</li><li>Il remplace les deux bits de poids faible de chaque composante du pixel (RVB) de l'image par les six bits du codage précédent : pour RVB (<b>29</b>, 24, <b>0</b>) avec la lettre « b » ("<b>01</b>10<b>11</b>") cela donne (<b>29</b>, 26, <b>3</b>), ce qui ne change pas énormément la couleur du pixel.<br/></li></ul><p>Pour voir le message, Alice devra effectuer l'opération inverse depuis l'image codée. Elle devra récupérer les deux bits de poids faible de chaque composante RVB de chaque pixel de l'image codée, les regrouper par six pour déchiffrer chaque caractère. (<b>29</b>, 26, <b>3</b>) donne en binaire (<b>11101</b>, 11010, <b>11</b>) et en ne gardant que les deux bits de poids faible,  ("<b>01</b>10<b>11</b>") ce qui donne la lettre « b ».</p>
<p>Alice et Bob s'accordent sur le fait que le message se termine par un point.</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
