# La compression d'images

<div class="imported-content">

<p>Afin de réduire leur taille en mémoire, nous allons compresser des images avec ou sans perte. Nous constaterons les effets de ces compressions. </p>
<p>Des photographies de plusieurs millions de pixels peuvent prendre une place importante en mémoire. La photographie d'un papillon présente dans cette activité occupe un espace mémoire de plus de 18 Mo. Pour certains services de messagerie électronique, ce fichier est trop "lourd" pour être adressé en pièce jointe à un destinataire.  <br/></p>
<p>On peut utiliser des algorithmes de compression qui permettent de réduire la taille des fichiers. Par exemple, il est possible de rechercher les motifs répétitifs dans une image et de les remplacer par des codes plus courts : au lieu de stocker cent fois un pixel identique, on peut simplement enregistrer une fois ce pixel et le nombre de ses répétitions. Il existe des algorithmes de compression beaucoup plus complexes toutefois que nous ne détaillerons pas ici. <br/></p>
<p>Certaines compressions sont réalisées sans perte, c'est-à-dire que l'image compressée est identique à l'image non compressée. D'autres compressions, dites avec perte, sont plus efficaces dans la réduction de la taille du fichier, mais elles altèrent l'image. Par exemple, on peut réduire le poids d'une image en arrondissant les valeurs des pixels à des niveaux prédéfinis.<br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
