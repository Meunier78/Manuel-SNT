# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Nous avons modélisé la table du DNS par un dictionnaire. Le programme demande à l'utilisateur d'entrer une adresse ip ou un nom de domaine. Si c'est un nom de domaine, on retrouve l'adresse ip correspondante dans le dictionnaire. À partir de l'adresse ip, on donne l'adresse réseau (net id) et l'adresse de la machine (host id).<br/></p>
<p>1. Complétez la fonction <i>est_ip</i> qui vérifie si la chaîne de caractères passée en paramètre est une adresse IPV4 et renvoie vrai ou faux.</p>
<p><i>def est_ipv4(ad):</i></p>
<p><i>    ad = ad.split('.')</i></p>
<p><i>    if ...................................:</i></p>
<p><i>        return False</i></p>
<p><i>    for a in ad:</i></p>
<p><i>        if .............................................:</i></p>
<p><i>            return ............</i></p>
<p><i>    return .............</i></p>
<p><i>dns = {"</i><a href="http://www.qwant.fr" rel="noopener" target="_blank"><i>www.qwant.fr":"217.70.184.56</i></a><i>", "</i><a href="http://www.fdj.fr" rel="noopener" target="_blank"><i>www.fdj.fr":"194.4.208.20</i></a><i>", </i></p>
<p><i>       "</i><a href="http://www.monlycee.fr" rel="noopener" target="_blank"><i>www.monlycee.fr":"213.186.33.19</i></a><i>"}</i></p>
<p><i>route_vers = input("ping ")</i></p>
<p><i>if not est_ipv4(route_vers):</i></p>
<p><i>    route_vers = dns.get(route_vers)</i></p>
<p><i>print("La route pour aller vers ", route_vers)</i></p>
<p><br/></p>
<p>2. Complétez la fonction <i>net_id</i> qui prend en paramètre l'adresse IP et le masque de sous réseau et qui renvoie l'adresse réseau.</p>
<p><i>def net_id(adresse, masque):</i></p>
<p><i>    netid = [0]*4</i></p>
<p><i>    ad = adresse.split('.')</i></p>
<p><i>    ma = ..................................</i></p>
<p><i>    for i in range(4):</i></p>
<p><i>        netid[i] = ..............................................</i></p>
<p><i>    netid = '.'.join(netid)</i></p>
<p><i>    return ......................</i></p>
<p><i>masque = "255.255.0.0"</i><br/></p>
<p><i>netid = net_id(route_vers, masque)</i></p>
<p><i>print("Adresse réseau : ", netid)</i></p>
<p><br/></p>
<p>3. Réalisez la fonction host_id qui renvoie l'adresse de la machine.</p>
<p><i>hostid = host_id(route_vers, masque)</i></p>
<p><i>print("Adresse machine : ", hostid)</i></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
