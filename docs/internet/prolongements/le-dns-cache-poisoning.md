# Le DNS cache poisoning

<div class="imported-content">

<p class="scrap-without-first-image"></p><p>Lorsqu'un appareil tente d'accéder à un site Web, il envoie une requête DNS pour résoudre le nom de domaine en une adresse IP correspondante. Les serveurs DNS utilisent la mise en cache pour stocker les résultats des requêtes précédentes afin d'améliorer les performances et de réduire le temps de résolution des requêtes suivantes.<br/>Une attaque d'empoisonnement du cache DNS (DNS cache poisoning) compromet un cache DNS en injectant de fausses informations. Un attaquant envoie une réponse DNS usurpée à un serveur DNS cible pour lui faire croire qu'il l'obtient d'un serveur DNS de confiance. Après une attaque réussie, le serveur DNS met à jour son cache avec les informations malveillantes fournies par l'attaquant. Les demandes futures adressées à ce domaine sont ensuite redirigées vers l'adresse IP malveillante, permettant aux attaquants d'intercepter le trafic ou d'effectuer d'autres types d'attaques. </p>
<p><img ="xl"="" class="imported-image" data-height="750" data-original-url="media%2FpearlContent%2F551774227" data-width="1000" id="l_2445204" loading="lazy" src="/Manuel-SNT/assets/imported/internet-prolongements-le-dns-cache-poisoning-html/image-01.jpg"/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
