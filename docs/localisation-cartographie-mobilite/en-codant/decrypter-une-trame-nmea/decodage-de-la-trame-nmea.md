# Décodage de la trame NMEA

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Les différents éléments de la trame sont détaillés ici.  <br/></p>
<p><b>$GxGGA </b> : Type de trame (x = A : GALLILEO ; P : GPS ; L : GLONASS ; B : BEIDOU ; N :  mixte P + L)</p>
<p><b>123036.000</b> : Trame envoyée à 12h30m36,000s (heure UTC format hhmmss.sss)</p>
<p><b>4850.8593</b>  : Latitude 48.8476° décimaux DD (48+50.8593/60) ou 48°50'51.56" DMS (48+50+0.8593*60)</p>
<p><b>N</b> : Nord </p>
<p><b>00220.6853</b> : Longitude 2.3447° décimaux (002+20.6853/60) ou 2°20'41.12" (002+20+0.6853*60)</p>
<p><b>E</b> : Est </p>
<p><b>1</b> : Type de positionnement (le 1 est un positionnement GPS)</p>
<p><b>9</b> : Nombre de satellites utilisés pour calculer les coordonnées</p>
<p><b>0.95</b>  : Précision horizontale</p>
<p><b>68.7</b> : Altitude</p>
<p><b>M</b> : en mètres</p>
<p><b>47.3</b>  : Correction de la hauteur du géoïde</p>
<p><b>M</b>  : en mètres</p>
<p><b>,,,,,0000</b>  : D'autres informations si besoin</p>
<p><b>6F</b>  : Somme de contrôle de parité</p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
