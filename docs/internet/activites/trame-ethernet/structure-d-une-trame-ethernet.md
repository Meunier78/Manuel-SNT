# Structure d'une trame Ethernet

<div class="imported-content">

<div class="card">




<div id="note-text"><p><img class="ptSynthesisImg imported-image" data-height="444" data-original-url="media%2For%2F551774033%3Fhid%3Dm_17132" data-width="750" id="m_17132" loading="lazy" src="/Manuel-SNT/assets/imported/internet-activites-trame-ethernet-structure-d-une-trame-ethernet-html/image-01.jpg"/></p>
<p>Le protocole TCP/IP repose sur la notion d'encapsulation des données et de trame Ethernet. Une trame Ethernet contient dans l'ordre, sans tenir compte du préambule de synchronisation, ni du contrôle de redondance cyclique (CRC) :<br/></p>
<ul><li> un champ codé sur 6 octets représentant « l’adresse physique » de destination ;<br/></li><li>un champ codé sur 6 octets représentant « l’adresse physique » source ;<br/></li><li>un champ codé sur 2 octets indiquant le type de données encapsulées ;<br/></li><li>un champ codé sur au minimum 46 octets contenant les données ;</li><li>un champ codé sur 6 octets de remplissage (PAD).</li></ul><p>Dans les différents champs, les valeurs sont codées en hexadécimal.</p>
<p>Si le champ "Type" a la valeur hexadécimale 0x800, il s’agit de données IP.<br/></p>
<p>Remarques :<br/></p>
<ul><li>Un nombre hexadécimal commence par le symbole 0x : 0x800 = (800)<sub>16</sub><br/></li><li>Dans un octet, on code un nombre hexadécimal comportant 2 chiffres (exemple 7A).</li><li>L'utilisateur doit envoyer des paquets de données d'au moins 46 octets sinon il y a remplissage pour atteindre les 46 octets avec le champ PAD.</li></ul><p><br/></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
