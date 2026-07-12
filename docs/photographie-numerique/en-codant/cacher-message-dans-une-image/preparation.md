# Préparation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>La bibliothèque Python « PIL » (Python Imaging Library) permet de traiter les images dans de nombreux formats. On l’importe avec <i>from PIL import Image.</i><br/></p>
<p>On ouvre l'image avec <i>img = Image.open("nom_image"), </i>on crée une nouvelle image avec <i>Image.new("RGB",(l,h)) </i>où RGB est le mode couleur et l, h les dimensions.</p>
<p><i>img.size</i> permet d'obtenir la taille (lxh) de l'image, <i>img.format</i>, le format (jpg, png, etc.) et <i>img.mode</i> le mode couleur (RVB) ou niveaux de gris (L) de l'image.<br/></p>
<p>On utilise la méthode <i>getdata()</i> pour récupérer les composantes RVB de chaque pixel dans une liste et la méthode <i>putdata(une_liste)</i> pour stocker les composantes RVB de chaque pixel dans un fichier. Exemple : </p>
<p><i>dataimage = img.getdata()</i><br/></p>
<p><i>resultat = Image.new("RGB", (l, h))</i><br/><i>resultat.putdata(dataimage) # l'image n'a pas changée !</i><br/><i>resultat.save(image.bmp) # on sauvegarde l'image au format bmp</i><br/><i>resultat.show() # pour afficher l'image</i><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
