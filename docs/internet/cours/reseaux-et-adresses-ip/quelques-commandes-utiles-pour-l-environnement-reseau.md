# Quelques commandes utiles pour l'environnement réseau

<div class="imported-content">

<p><b>ipconfig</b><br/>Cette commande affiche les informations de configuration IP de votre ordinateur, tels que l'adresse IP, le masque de sous-réseau, la passerelle par défaut et les adresses MAC. Vous pouvez également utiliser les options "/release" et "/renew" pour libérer et renouveler une adresse IP auprès d'un serveur DHCP.</p>
<p><b>ping</b><br/>La commande ping vous permet de vérifier la connectivité réseau avec une autre adresse IP. Par exemple, <i>ping </i><a href="http://www.inria.fr" rel="noopener" target="_blank"><i>www.inria.fr</i></a> ou <i>ping 128.93.162.83</i> enverra des paquets ICMP à l'adresse symbolique ou IP spécifiée et affichera les statistiques de réponse. </p>
<p><b>tracert</b><br/>Cette commande trace la route empruntée par les paquets réseau entre votre ordinateur et une adresse IP ou symbolique indiquée. Elle affiche les différents sauts intermédiaires (routeurs) et les temps de latence associés. Exemple :  <i>tracert </i><a href="http://www.inria.fr" rel="noopener" target="_blank"><i>www.inria.fr</i></a> ou <i>tracert</i> <i>128.93.162.83</i></p>
<p><b>netstat</b><br/>Cette commande affiche les connexions réseau actives, les ports en écoute sur votre ordinateur et diverses statistiques réseau. L'option "-a" affiche toutes les connexions et les ports en écoute, tandis que l'option "-r" affiche la table de routage. Ctrl + C pour sortir. </p>
<p><b>nslookup</b><br/>Cette commande permet de résoudre les noms de domaine en adresses IP et vice versa. Par exemple, <i>nslookup </i><i>www.</i><i>inria.fr</i> affichera l'adresse IP associée au nom de domaine spécifié.</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
