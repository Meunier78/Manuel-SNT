# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Partie 1 : Extraire la localisation et la date de l'image.</p>
<p>Nous vous proposons le programme à compléter suivant qui utilise trois fonctions vous permettant d'afficher les informations requises dans la console :</p>
<p><i>from PIL import Image</i><br/><i>from PIL.ExifTags import TAGS</i><br/></p>
<p><i>def get_coord_gps(exif_data):</i><br/><i>    lat = coord_degres(exif_data['GPSInfo'][2])</i><br/><i>    lat_ref = exif_data['GPSInfo'][1]</i><br/><i>    long = coord_degres(exif_data['GPSInfo'][4])</i><br/><i>    long_ref = exif_data['GPSInfo'][3]</i><br/><i>    if lat_ref != "N":</i><br/><i>        lat *= -1  # équivalent à lat = (-1)*lat</i><br/><i>    if long_ref != "E":</i><br/><i>        long *= -1   # équivalent à long = (-1)*long</i><br/><i>    return lat, long</i></p>
<p><i>def coord_degres(coord):</i><br/><i>    # Conversion des coordonnées GPS en degrés</i><br/><i>    return coord[0] + (coord[1] / 60.0) + (coord[2] / 3600.0)</i></p>
<p><i>def get_date_time(exif_data):</i><br/><i>    sdate_time = exif_data['DateTime']</i><br/><i>    ldate_time = sdate_time.split(" ")</i><br/><i>    ldate = ldate_time[0].split(":")</i><br/><i>    time = ldate_time[1]</i><br/><i>    date = ldate[2]+"/"+ldate[1]+"/"+ldate[0]</i><br/><i>    return date, time</i></p>
<p><i>img = Image.open("NYC.jpg")</i><br/><i>img.show()</i><br/><i>exif_data = {TAGS[k]: v for k, v in img._getexif().items() if k in TAGS}</i><br/><i>print(exif_data)</i></p>
<p><i># A compléter !</i></p>
<p>1. Complétez le programme pour qu'il affiche la localisation GPS (latitude et longitude) ainsi que la date et l'heure de la prise de vue.</p>
<p><br/></p>
<p>Partie 2 : Générer la carte postale</p>
<p>Le patron est réalisé avec les mêmes dimensions que la photographie, avec une couleur primaire (vert : (0, 255, 0)) sur fond blanc (255, 255, 255). Il suffit de lire chaque pixel, dans une double boucle balayant toutes les coordonnées x, y du patron et de vérifier la couleur : si c'est vert, vous recopiez le pixel(x, y) de la photographie dans la nouvelle image et sinon, vous écrivez un pixel blanc.</p>
<p><u>Attention</u>, la couleur verte  (0, 255, 0) n'est pas forcément aussi précise, il est donc obligatoire de prendre une marge de 10 environ sur ces valeurs (0 à 10, 245 à 255, 0 à 10).</p>
<p>2. Ajoutez et complétez le code suivant :<br/></p>
<p><i>patron = Image.open("patron_NYC.jpg")</i><br/><i>patron.show()</i><br/><i>l, h = img.size</i><br/><i>carte_postale = Image.new("RGB",(l,h)) </i></p>
<p><i># A compléter !</i><br/></p>
<p><u>Attention</u>, le traitement de l'image peut être long (&gt; 1 min !) suivant la rapidité de votre PC.<br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
