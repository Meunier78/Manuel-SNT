# Qu'est-ce qu'un masque de sous réseau ?

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Le masque de sous-réseau permet de diviser un réseau IP en sous-réseaux plus petits.<br/></p>
<p>Il détermine quelles parties de l'adresse IP sont utilisées pour identifier le réseau et les sous-réseaux, et quelles parties identifient les hôtes individuels, c'est-à-dire les machines, dans ces sous-réseaux. Le masque de sous-réseau détermine le nombre de machines pouvant communiquer entre elles.<br/></p>
<p>Le masque de sous réseau est codé sur 4 octets c'est-à-dire 32 bits pour une adresse IPv4. Par convention, un slash "/" sépare l'adresse IP du masque de sous-réseau :<br/></p>
<p>           IP             /     Masque<br/>192.168.1.101 / 255.255.255.0<br/>192.168.1.101 / 11111111.11111111.11111111.00000000<br/>192.168.1.101 / 24 car 3x8 = 24 bits non nuls<br/></p>
<p><b>192.168.1</b>.101 / 24 : les 3 octets en gras représentent la partie réseau et le dernier octet, ici de valeur décimale 101, la machine.</p>
<p>On obtient l'adresse du réseau en appliquant l'opération logique ET bit à bit entre l'IP et le masque.</p>
<p>Rappels :  0 ET 1 = 0, 1 ET 0 = 0, 1 ET 1 = 1.</p>
<p>Le calculateur de masque du CNRS CRIC de Grenoble permet d'obtenir les informations relatives à un réseau : <a href="https://cric.grenoble.cnrs.fr/Administrateurs/Outils/CalculMasque/" rel="noopener" target="_blank">https://cric.grenoble.cnrs.fr/Administrateurs/Outils/CalculMasque/</a><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
