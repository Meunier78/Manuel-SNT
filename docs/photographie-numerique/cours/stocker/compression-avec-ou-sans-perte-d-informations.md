# Compression avec ou sans perte d'informations

<div class="imported-content">

<p>Les quantités d'information permettant de stocker une image sont de plus en plus importantes, parce que la définition des images (en pixels) grandit année après année.<br/></p>
<p>Ainsi, une image de 8 064 x 6 048 pixels avec une profondeur de couleur de 24 bits (trois octets) représente une quantité d'informations d'environ 140 mégaoctets (140 Mo).<br/></p>
<p>Pour cette raison, on utilise des algorithmes qui permettent de réduire la taille des fichiers.<br/></p>
<p>Par exemple, il est possible de rechercher les motifs répétitifs dans une image et de les remplacer par des codes plus courts : au lieu de stocker cent fois un pixel identique, on peut simplement enregistrer une fois ce pixel et le nombre de répétitions. Il existe des algorithmes de compression beaucoup plus complexes toutefois que nous ne détaillons pas ici. <br/></p>
<p>Certaines compressions sont réalisées sans perte, c'est-à-dire que l'image est identique à l'image non compressée. D'autres compressions, dites avec perte, sont plus efficaces dans la réduction de la taille mémoire, mais altèrent l'image. Par exemple, en arrondissant les valeurs des pixels à des niveaux prédéfinis.<br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
