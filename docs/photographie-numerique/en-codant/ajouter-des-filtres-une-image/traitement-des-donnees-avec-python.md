# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Nous allons aborder les fonctions succinctes qui nous permettrons de filtrer l'image.</p>
<p>Exécutez le programme suivant : </p>
<p><i>from PIL import Image</i><br/><i>img = Image.open("couleurs.jpg")</i><br/><i>print("Format, taille et codage de l'image :")</i><br/><i>l, h = img.size</i><br/><i>formI=img.format</i><br/><i>codeI=img.mode</i><br/><i>print(formI, l, h, codeI )</i><br/><i>imshow(img)   #affiche l'image</i><br/></p>
<p>1. Afin d'afficher les codes RVB de chaque pixel de l'image, nous devons réaliser la lecture de tous les pixels d'une ligne et ce, sur chaque ligne. Nous devons alors réaliser une boucle qui se déplace en x sur toute la largeur dans une autre boucle qui se déplace en y sur toute la hauteur. Complétez la procédure "affichePix(image)" qui affiche tous les pixels de l'image.</p>
<p><i>def affichePix(image):</i><br/><i>   l</i><i>,h = image.size</i><br/><i>    for y in range(h):</i><br/><i>        # A compléter</i></p>
<p><i>affichePix(img)</i></p>
<p>Pour effectuer des modifications sur une image, nous devons créer une nouvelle image RVB ayant les mêmes dimensions que la première : <i>newimg = Image.new("RGB", (l,h))</i><br/>Nous pouvons alors remplir cette nouvelle image avec des pixels : <i>newimg.putpixel((x,y),(rvb[0],rvb[1],rvb[2]))</i>.<br/>Pour créer un filtre de couleur rouge sur l’image, il suffit de supprimer les pixels Verts et Bleus et de garder uniquement les pixels Rouges. Vous devez donc :</p>
<ul><li>Créer une nouvelle image de dimensions l, h</li><li>Pour chaque pixel, lire le pixel de l'image d'origine, le modifier et le placer dans la nouvelle image</li></ul><p>2. Réalisez la fonction filtreR() qui prend comme paramètre l’image "perroquet.jpg" et retourne la nouvelle image filtrée. Affichez la à l’écran.<br/><i>    l,h = image.size</i><br/><i>    newimg = Image.new("RGB",(l,h))</i><br/><i>    </i><br/><i>    # A compléter</i><br/><i>    </i><br/><i>    return newimg</i></p>
<p><i>img2 = Image.open("perroquet.jpg")</i><br/><i>perroquetR = filtreR(img2)</i><br/><i>img2.show()</i></p>
<p>Pour transformer une image en niveaux de gris, nous utilisons la méthode <i>convert()</i> comme suit : <i>imgNG = img.convert(‘L’)</i>.<br/>3. Transformez l’image en niveaux de gris "perroquetNG" et l'afficher.</p>
<p>On désire transformer l'image en niveau de gris précédente par une image en noir et blanc. Nous devons donc remplacer les pixels inférieurs à 128 par 0 et ceux supérieurs à 128 par 255.</p>
<p>4. Complétez et exécutez le programme suivant :<br/></p>
<p><i>l, h = perroquetNG.size</i><br/><i>perroquetNB = Image.new("L",(l,h))</i></p>
<p><i># A compléter</i></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
