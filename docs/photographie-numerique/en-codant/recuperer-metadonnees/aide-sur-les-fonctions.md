# Aide sur les fonctions

<div class="imported-content">

<p><b>get_coord_gps(exif_data)</b> : permet d'obtenir les coordonnées GPS. Le paramètre "exif_data" est un dictionnaire de dictionnaires qui contient les métadonnées de la photographie. La clé "GPSInfo" a pour valeur le dictionnaire comportant les données de géolocalisation :<br/>'GPSInfo': {0: b'\x02\x02\x00\x00', 1: 'N', 2: (48.0, 52.0, 12.257), 3: 'E', 4: (2.0, 20.0, 11.2598), 5: b'\x00', 6: 83.0, 7: (12.0, 55.0, 35.0), 27: b'G\x00P\x00S\x00\x00\x00', 29: '2018:11:14'}<br/>exif_data['GPSInfo'][2] donne la latitude qu'il faudra multiplier par -1 car l'indicateur est "N"<br/></p>
<p><b>coord_degres(coord)</b> : permet de traduire les coordonnées GPS de la fonction précédente en degrés décimaux :<br/></p>
<p>48.0, 52.0, 12.257 correspond à 48 + 52/60 + 12.257/3600 <br/></p>
<p><b>get_date_time(exif_data)</b> : permet d'obtenir la date et l'heure. Le paramètre "exif_data" est un dictionnaire de dictionnaires qui contient les métadonnées de la photographie. La clé "DateTime" a pour valeur une chaine de caractères comportant la date et l'heure de la prise de vue : <br/></p>
<p>'DateTime': '2018:11:14 13:55:51'<br/></p>
<p>On doit d'abord séparer cette chaine en deux avec le caractère espace " " pour avoir la date et l'heure puis encore en trois avec le caractère ":" si l'on veut pouvoir adapter le format (2018:11:14 en 14/11/2018 par exemple).</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
