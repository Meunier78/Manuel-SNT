# De la requête DNS à l'affichage d'une page web

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>L'accès à la page d'accueil d'un site web, à partir de son nom de domaine, déclenche une série d’étapes permettant à l’internaute d’accéder au contenu qu’il souhaite consulter. Celles-ci mobilisent différents serveurs DNS (Domain Name System). Les principales étapes sont résumées ci-dessous.</p>
<ul><li><b>Étape 1</b><br/><i>Via</i> sa connexion internet qui transite par sa box assurant la fonction de modem-routeur, l’internaute entre une URL, « inria.fr » par exemple, dans le navigateur web de son ordinateur. Cette requête est envoyée par la box, par défaut, au résolveur DNS de son fournisseur d'accès à Internet (FAI) qui se charge de la résolution de nom de domaine.<br/></li><li><b>Étape 2</b><br/>Le résolveur DNS reçoit la requête et la transmet au serveur racine du DNS.<br/></li><li><b>Étape 3</b><br/>Le serveur racine répond en indiquant le serveur correspondant à l'extension <a href="https://www.ovhcloud.com/fr/domains/tld/com/" rel="noopener" target="_blank">d</a>e nom de domaine (Top-level domain) rattachée au domaine recherché par l'internaute, ici le .fr.<br/></li><li><b>Étape 4</b><br/>Le résolveur DNS envoie la requête au serveur de noms en .fr.<br/></li><li><b>Étape 5</b><br/>Ce dernier répond alors en indiquant le serveur DNS en charge du nom de domaine recherché.</li><li><b>Étape 6</b><br/>Le résolveur du FAI envoie la requête au serveur DNS en charge du nom de domaine recherché.<br/></li><li><b>Étape 7</b><br/>Ce serveur DNS, via une table de correspondance, fournit au résolveur DNS du FAI l'adresse IP du serveur web associé au nom de domaine « inria.fr ». Cette adresse IP est stockée en mémoire cache pour une consultation ultérieure du site plus rapide.<br/></li><li><b>Étape 8</b><br/>L’adresse IP est transmise au navigateur web.<br/></li><li><b>Étape 9</b><br/>Le navigateur web soumet la requête HTTP (Hypertext Transfer Protocol) inria.fr au serveur web correspondant à l’IP fournie par le résolveur DNS.<br/></li><li><b>Étape 10</b><br/>Le serveur web répond en retournant le contenu correspondant à inria.fr, à savoir la page d’accueil du site internet.</li></ul><p>En conclusion, lorsqu’un nom de domaine est renseigné dans la barre de recherche d'un navigateur, la requête est généralement envoyée au serveur DNS du FAI (Fournisseur d'Accès Internet). Celui-ci , après avoir consulté d'autres serveurs DNS, y répond en fournissant l’adresse IP du serveur web associé à la requête. Le navigateur peut alors adresser sa requête au serveur cible, puis renvoyer à l’internaute les données reçues, c'est-à-dire le site internet recherché.<br/>Il est à noter que les serveurs DNS des FAI peuvent stocker, dans leur mémoire cache, des tables de correspondance nom de domaine / adresse IP des sites les plus consultés par les internautes, afin de réduire le temps d'accès.<br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
