# Traitement des données avec Python

<div class="imported-content">

<p>Nous allons déterminer la route pour aller de la machine source à la destination. La source est forcément l'un des deux ordinateurs portables. La destination peut être entrée avec la commande ping suivie d'une adresse IP ou d'un nom de domaine.<br/></p>
<p>Soit le programme :<br/></p>
<p><i>def est_ipv4(ad):</i><br/><i>    # Permet de savoir si l'adresse ad est au format IPV4</i><br/><i>    ad = ad.split('.')</i><br/><i>    if len(ad) != 4:</i><br/><i>        return False</i><br/><i>    for a in ad:</i><br/><i>        if not (0 &lt;= int(a) &lt;= 255):</i><br/><i>            return False</i><br/><i>    return True</i></p>
<p><i>def net_id(adresse, masque):</i><br/><i>    # Renvoie l'adresse du réseau</i><br/><i>    netid = [0]*4</i><br/><i>    ad = adresse.split('.')</i><br/><i>    ma = masque.split('.')</i><br/><i>    for i in range(4):</i><br/><i>        netid[i] = str(int(ad[i])&amp;int(ma[i]))</i><br/><i>    netid = '.'.join(netid)</i><br/><i>    return netid</i></p>
<p><i>def host_id(adresse, masque):</i><br/><i>    # Renvoie l'adresse de  la machine</i><br/><i>    hostid = [0]*4</i><br/><i>    ad = adresse.split('.')</i><br/><i>    ma = masque.split('.')</i><br/><i>    for i in range(4):</i><br/><i>        hostid[i] = str(int(ad[i])&amp;(256+~int(ma[i])))</i><br/><i>    hostid = '.'.join(hostid)</i><br/><i>    return hostid</i></p>
<p><i># Pour les PC et serveurs</i><br/><i>identifiants = {"172.16.100.10":"Portable 1", "172.16.100.12":"Portable 2",</i><br/><i>                "172.16.100.2":"Serveur DNS", "213.186.33.19":"Serveur web Lycée",</i><br/><i>                "217.70.184.56":"Serveur web Qwant", "194.4.208.20":"Serveur web fdj"}</i><br/><i># Serveur de nom de domaine</i><br/><i>dns = {"</i><a href="http://www.qwant.fr" rel="noopener" target="_blank"><i>www.qwant.fr":"217.70.184.56</i></a><i>", "</i><a href="http://www.fdj.fr" rel="noopener" target="_blank"><i>www.fdj.fr":"194.4.208.20</i></a><i>",</i><br/><i>       "</i><a href="http://www.monlycee.fr" rel="noopener" target="_blank"><i>www.monlycee.fr":"213.186.33.19</i></a><i>"}</i><br/><i># Commutateur (switch)</i><br/><i>table_ARP = {"172.16.100.10":"5D:4C:07:CD:C2:62", "172.16.100.12":"86:F7:BD:F0:1F:00",</i><br/><i>             "172.16.100.2":"F3:43:84:E0:47:D0"}</i><br/><i># Routeurs</i><br/><i>table_R1 = {"172.16.0.0":[None, "172.16.100.1"],</i><br/><i>            "213.186.0.0":[None, "213.186.33.1"],</i><br/><i>            "217.70.0.0":["192.168.0.1", "192.168.0.2"],</i><br/><i>            "194.4.0.0":["192.168.0.1", "192.168.0.2"]}</i><br/><i>table_R2 = {"172.16.0.0":["192.168.0.2", "192.168.0.1"],</i><br/><i>            "213.186.0.0":["192.168.0.2", "192.168.0.1"],</i><br/><i>            "217.70.0.0":[None, "217.70.184.1"],</i><br/><i>            "194.4.0.0":[None, "194.4.208.1"]}</i></p>
<p><i>source = input("Votre adresse IP : ")</i></p>
<p><i>destination = input("ping ")</i><br/></p>
<p><br/></p>
<p>1. Complétez ce programme afin de conserver l'adresse IP destination ou de remplacer le nom de domaine par son adresse IP. On donne :</p>
<p><i># On vérifie si adresse IPV4 ou nom de domaine</i></p>
<p><i>if not est_ipv4(..................................):</i></p>
<p><i>    destination = ............................................</i></p>
<p><i>print("La route pour aller vers ", destination)</i></p>
<p><i>source = identifiants.get(......................)</i></p>
<p><i>print("source : ", source)</i></p>
<p><i>print("\t--&gt; Switch")</i></p>
<p><br/></p>
<p>Si la destination est directement connectée au switch, la route est déterminée, sinon il faut aller vers le routeur R1. De la même manière, on détermine s'il faut aller vers le routeur R2 ou s'arrêter à R1.</p>
<p>2. Complétez le programme.</p>
<p><i># L'adresse est-elle dans le sous-réseau local ?</i></p>
<p><i>if table_ARP.get(..........................) == None:</i></p>
<p><i>    print("\t--&gt; ...............................")</i></p>
<p><i>    masque = "255.255.0.0"</i></p>
<p><i>    netid = net_id(.........................................)</i></p>
<p><i>    # L'adresse est-elle dans le réseau local ?</i></p>
<p><i>    if table_R1.get(netid)[0] != .....................:</i></p>
<p><i>        print("\t--&gt; ...........................")</i></p>
<p><i>destination = ......................................</i></p>
<p><i>print("destination : ", destination)</i></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
