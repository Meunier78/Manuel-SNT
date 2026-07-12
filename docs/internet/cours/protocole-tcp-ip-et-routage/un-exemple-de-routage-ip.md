# Un exemple de routage IP

<div class="imported-content">

<div class="card">




<div id="note-text"><p><img class="imported-image ptSynthesisImg" data-filename="blob" data-height="758" data-original-url="media%2For%2F551774095%3Fhid%3Dm_17065" data-width="750" id="m_17065" loading="lazy" src="/Manuel-SNT/assets/imported/internet-cours-protocole-tcp-ip-et-routage-un-exemple-de-routage-ip-html/image-01.jpg"/></p>
<p>Supposons, comme sur le schéma, que nous ayons un réseau local (LAN) avec l'adresse IP 192.168.0.0/24. Cela signifie que les trois premiers octets (192.168.0) représentent le réseau et le dernier octet (0) est réservé aux hôtes.</p>
<p>Le réseau local (LAN) et connecté à internet (WAN) via un routeur (box internet) qui possède deux interfaces réseau :</p>
<ul><li>Interface 1 : Adresse IP 192.168.0.1/24 (connectée au réseau local)</li><li>Interface 2 : Adresse IP 10.0.0.1/24 (connectée au réseau externe du FAI)</li></ul><p>Maintenant, supposons qu'un ordinateur ayant pour IP 192.168.0.101/24 sur le réseau local souhaite envoyer des données à un serveur possédant l'adresse IP 8.8.8.8 (représentant le serveur DNS de Google).</p>
<p>L'ordinateur consulte sa table de routage et remarque que l'adresse IP de destination (8.8.8.8) ne fait pas partie du réseau local. Il envoie donc le paquet au routeur, qui examine également sa table de routage.</p>
<p>Le routeur constate qu'il dispose d'une interface connectée au réseau local, mais que l'adresse de destination appartient à un autre réseau. Il décide donc de transmettre le paquet via son interface 2, qui est connectée au réseau externe.</p>
<p>Le routeur encapsule le paquet dans un nouvel en-tête IP avec l'adresse IP source de son interface 2 (10.0.0.1) et l'adresse IP de destination du serveur DNS (8.8.8.8). Ensuite, il envoie le paquet vers le réseau externe.<br/></p>
<p>Le routeur externe, qui est responsable du routage des paquets sur Internet, reçoit le paquet. Il utilise ses propres tables de routage pour déterminer le prochain saut vers la destination finale.</p>
<p>Supposons que le routeur externe dispose d'une entrée dans sa table de routage indiquant que le réseau correspondant à l'adresse IP de destination (8.8.8.8) peut être atteint via une autre interface connectée à Internet. Le routeur externe encapsule à nouveau le paquet dans un nouvel en-tête IP approprié pour le prochain saut et le transmet vers ce réseau.</p>
<p>Ce processus se poursuit à travers plusieurs routeurs sur Internet jusqu'à ce que le paquet atteigne finalement le réseau du serveur DNS de Google.</p>
<p>Une fois que le paquet atteint le réseau du serveur DNS, les routeurs locaux acheminent le paquet vers l'adresse IP de destination spécifiée (8.8.8.8) jusqu'à ce qu'il atteigne le serveur DNS lui-même.</p>
<p>Le serveur DNS répond ensuite au paquet en suivant le même processus de routage inverse pour renvoyer les données demandées à l'ordinateur source sur le réseau local.</p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
