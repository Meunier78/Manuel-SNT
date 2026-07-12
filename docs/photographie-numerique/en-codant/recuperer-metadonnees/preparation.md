# Préparation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>La bibliothèque Python « PIL » (Python Imaging Library) permet de traiter les images dans de nombreux formats. On l’importe avec <i>from PIL import Image</i><br/>On ouvre l'image avec <i>img = Image.open("nom_image")</i>, on crée une nouvelle image<i> avec Image.new("RGB",(l,h)) </i>où RGB est le mode couleur et l, h les dimensions.</p>
<p>On utilise la méthode <i>getpixel((x,y))</i> pour obtenir les informations sur le pixel de coordonnées x, y.<br/></p>
<p>Pour lire les pixels aux coordonnées (5, 3), on donne l'instruction <i>img.getpixel((5,3)))</i> et pour écrire un pixel à ces mêmes coordonnées on a <i>img.putpixel(5,3),(255,0,0)).</i><br/></p>
<p>Pour obtenir les métadonnées, il faut importer le module TAGS avec <i>from PIL.ExifTags import TAGS.</i></p>
<p>Nous pouvons alors afficher ces métadonnées avec :</p>
<p><i>exif_data = {TAGS[k]: v for k, v in img._getexif().items() if k in TAGS}</i><br/><i>print(exif_data)</i><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
