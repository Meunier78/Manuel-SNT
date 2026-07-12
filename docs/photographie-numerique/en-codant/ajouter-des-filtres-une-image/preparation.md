# Préparation

<div class="imported-content">

<p>La bibliothèque Python "PIL" (Python Imaging Library) permet de traiter les images dans de nombreux formats. On l’importe avec <i>from PIL import Image.</i><br/></p>
<p>On ouvre l'image avec <i>img = Image.open("nom_image")</i>, on crée une nouvelle image avec <i>Image.new("RGB",(l,h))</i> où <i>RGB</i> est le mode couleur et <i>l</i>, <i>h</i> les dimensions.</p>
<p><i>img.size</i> permet d'obtenir la taille (l × h) de l'image, <i>img.format</i>, le format (jpg, png, etc.) et <i>img.mode</i> le mode couleur (RVB) ou niveaux de gris (L) de l'image.<br/></p>
<p>On utilise la méthode <i>getpixel((x,y))</i> pour obtenir les informations sur le pixel de coordonnées x, y. Pour lire les pixels aux coordonnées (5, 3) , on donne l'instruction <i>img.getpixel((5,3)))</i> et pour écrire un pixel à ces mêmes coordonnées on a <i>img.putpixel(5,3),(255,0,0))</i></p>
<p>Pour transformer une image en niveaux de gris, nous utilisons la méthode <i>convert()</i>  comme suit : <i>imgNG = img.convert(‘L’), "L" </i>étant le mode niveaux de gris.<br/></p>
<p><br/></p>
<p><br/></p>
<p><br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
