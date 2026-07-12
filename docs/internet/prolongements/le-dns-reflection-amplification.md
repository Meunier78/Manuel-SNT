# Le DNS Reflection/Amplification

<div class="imported-content">

<p>Une attaque par réflexion/amplification DNS est une technique utilisée par les attaquants pour amplifier le volume de leur trafic d'attaque et submerger leurs cibles avec un flot de réponses DNS. Le principe de cette attaque est le suivant.<br/><br/><b>Réflexion</b><br/> Les attaquants exploitent des serveurs DNS ouverts ou mal configurés pour envoyer des réponses DNS volumineuses aux cibles. Un serveur DNS ouvert est un serveur qui répond aux requêtes DNS de n'importe quelle source sans validation appropriée. L'attaquant envoie des requêtes DNS usurpées à ces serveurs en utilisant l'adresse IP de la victime comme adresse source, et renvoie les réponses DNS à leur destination.<br/><br/><b>Amplification</b><br/> Les attaquants utilisent des requêtes DNS spécialement conçues pour générer des réponses DNS beaucoup plus volumineuses que la requête d'origine. Cela permet à l'attaquant de doubler la quantité de trafic d'attaque par rapport au trafic d'origine. Par exemple, une requête DNS de plusieurs dizaines d'octets peut générer une réponse de plusieurs kilo-octets.<br/><br/> Le principe de cette attaque est que l'attaquant envoie de petites requêtes aux serveurs DNS distribuées sur Internet, usurpe l'adresse IP source et renvoie la réponse à la victime ciblée. Cela augmente le trafic car la grande réponse générée par le serveur DNS est beaucoup plus grande que la requête initiale envoyée par l'attaquant.<br/><br/> Par conséquent, la cible peut être inondée de réponses DNS, surchargeant les ressources réseau telles que la bande passante, les pare-feux et les serveurs. Cela peut entraîner un déni de service (DoS) ou une grave dégradation des performances sur le réseau cible. </p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
