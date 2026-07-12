# La norme NMEA

<div class="imported-content">

<p class="scrap-without-first-image"></p><p>NMEA 0183 est une norme utilisée pour la transmission de données entre les appareils électroniques marins, par exemple les sonars, les anémomètres ou les récepteurs GPS. En général, les récepteurs GPS des bateaux communiquent leur localisation (latitude, longitude) en utilisant cette norme.<br/></p>
<p>Une trame NMEA 0183 peut s'écrire ainsi :</p>
<p>$GPGGA,xxxxxx.xxx, AAAA.AAA, N/S, BBBBB.BBB, E/O, ...<br/></p>
<p> Après le début, "$GPGGA", spécifique à la trame, on peut lire :</p>
<ul><li>l'heure sous la forme hhmmss :<br/>13h54 et 36 secondes se code 135436, les chiffres après le point étant des millièmes de seconde ; </li><li>la latitude codée sous la forme AAAA.AAA :<br/>Les deux premiers chiffres représentent la latitude en degrés et les cinq chiffres suivants représentent les minutes, en remplaçant le point par une virgule. On indique ensuite si la valeur de la latitude est orientée vers le nord ou vers le sud avec la lettre N ou S.</li><li>la longitude est codée sous la forme BBBBB.BBB : <br/>Les trois premiers chiffres représentent la longitude en degrés. Les cinq chiffres suivants représentent les minutes, en remplaçant le point par une virgule. On indique ensuite si la valeur de la longitude est orientée vers l'est ou l'ouest avec la lettre E ou W.</li></ul><p><img ="xl"="" class="imported-image" data-height="527" data-original-url="logo%2Fhash%2F551775518%3Fh%3D5b6e45f628feeab2d1e98dc27f15ac5e" data-width="1000" id="l_2411958" loading="lazy" src="/Manuel-SNT/assets/imported/localisation-cartographie-activites-localiser-un-voilier-la-norme-nmea-html/image-01.jpg"/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
