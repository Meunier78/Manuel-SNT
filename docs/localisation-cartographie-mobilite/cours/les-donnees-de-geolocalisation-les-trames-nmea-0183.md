# Les données de géolocalisation : les trames NMEA 0183

<div class="imported-content">

<div class="card">




<div id="note-text"><p class="scrap-without-first-image"></p><p>Les données GPS sont parfois codées de manière particulière. Par exemple, les voiliers communiquent généralement leur position suivant la norme NMEA 0183.<br/></p>
<p>Une trame NMEA 0183 s'écrit sous la forme suivante : </p>
<p>$GPGGA,081118.807,4731.686,N,00259.771,W,1,12,1.0,0.0,M,0.0,M,,*74</p>
<ul><li>081118.807 est l'heure de la mesure : 8 heures 11 minutes et 18 secondes (et 807 millièmes)<br/>Les deux premiers chiffres de 4731.686,N représentent la latitude en degrés, et la suite représente les minutes.<br/>==&gt; ici : 47° et 31,686' au nord </li><li>Les trois premiers chiffres de 00259.771 représentent la longitude en degrés, et la suite représente les minutes.<br/>==&gt; ici : 2° et 59,771' à l'ouest </li></ul><p>Ici, nous décodons donc en degrés décimaux : 47.5281, -2.99618333. Cela positionne le bateau dans le Morbihan si l'on copie-colle 47.5281, -2.99618333 dans le champ de recherche d'OpenStreetmap (voir <a href="https://www.openstreetmap.org/search?query=47.5281%2C%20-2.99618333#map=13/47.5281/-2.9963" rel="noopener" target="_blank">https://www.openstreetmap.org/search?query=47.5281%2C%20-2.99618333#map=13/47.5281/-2.9963</a>).</p>
<p><img ="xl"="" class="imported-image" data-height="589" data-original-url="logo%2Fhash%2F551775561%3Fh%3Dc9e8b764cee9354f42521beb399e1049" data-width="749" id="l_2287469" loading="lazy" src="/Manuel-SNT/assets/imported/localisation-cartographie-cours-les-donnees-de-geolocalisation-les-trames-nmea-0183-html/image-01.jpg"/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
