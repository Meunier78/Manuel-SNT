# Exemple : le masque de sous réseau 255.255.255.0

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Supposons que nous ayons une machine avec l'adresse IP 192.168.0.101 et un masque de sous réseau de 255.255.255.0 .<br/>Cette adresse IP 192.168.0.101 est composée de quatre octets (32 bits) et peut être représentée sous forme binaire de la manière suivante : <br/></p>
<ul><li>11000000.10101000.00000000.01100101</li></ul><p>Le masque de sous-réseau est également un nombre binaire de 32 bits. Les bits "1" dans le masque indiquent les parties de l'adresse IP utilisées pour identifier le réseau et les sous-réseaux, tandis que les bits "0" indiquent les parties de l'adresse IP utilisées pour identifier les hôtes individuels.<br/></p>
<p>Choisir un masque de sous-réseau de 255.255.255.0 correspond en notation binaire à ceci :<br/></p>
<ul><li>11111111.11111111.11111111.00000000</li></ul><p>Appliquons ce masque de sous-réseau à notre adresse IP :<br/></p>
<ul><li>Adresse IP 192.168.0.101 : 11000000.10101000.00000000.01100101<br/></li><li>Masque 255.255.255.0 :     11111111.11111111.11111111.00000000</li></ul><p>En appliquant l'opération logique ET bit à bit  entre l'adresse IP et le masque de sous-réseau, nous obtenons l'adresse du réseau auquel appartient la machine :</p>
<ul><li>11000000.10101000.00000000.00000000 soit 192.168.0.0</li></ul><p>La machine avec l'IP 192.168.0.101 et ayant le masque de sous-réseau<b> </b>255.255.255.0 (3x8 = 24 bits non nuls) appartient au réseau 192.168.0.0.<br/></p>
<p>La notation abrégée indiquant l'adresse IP de la machine et son masque de sous-réseau est la suivante :<br/></p>
<ul><li>192.168.0.101 / 24.</li></ul><p>Caractéristiques du réseau étudié :<br/></p>
<ul><li>adresses IP du réseau : 192.168.0.0<br/></li><li>adresses IP des machines  sur le réseau : de 192.168.0.1 à 192.168.0.254 soient 254 machines au maximum</li><li>adresse IP de "broadcast" : 192.168.0.255</li></ul></div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
