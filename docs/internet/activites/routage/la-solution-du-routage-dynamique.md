# La solution du routage dynamique

<div class="imported-content">

<p>Le routage dynamique est un mode opératoire utilisé dans les réseaux informatiques pour déterminer la meilleure façon de diriger les données (ou paquets) d'un point à un autre à travers le réseau. Plutôt que d'utiliser des chemins prédéfinis, le routage dynamique permet aux routeurs du réseau de communiquer entre eux et de prendre des décisions en temps réel sur la meilleure route à suivre.</p>
<p>Les avantages du routage dynamique sont multiples :</p>
<p><b>1. Adaptabilité</b><br/>Le routage dynamique permet aux réseaux de s'adapter aux changements de topologie ou aux pannes. Lorsqu'un routeur détecte un changement dans le réseau, tel qu'une nouvelle connexion ou une défaillance d'un lien, il peut communiquer avec les autres routeurs pour mettre à jour les informations présentes dans leurs tables de routage respectives. Cela permet d'optimiser le chemin emprunté par les paquets pour atteindre leur destination, même en présence de modifications constantes.</p>
<p><b>2. Optimisation</b><br/>Dans les réseaux de grande taille, il peut y avoir des milliers de routeurs interconnectés. Le routage dynamique permet une gestion efficace de ces réseaux en répartissant la charge de calcul entre les différents routeurs. Chaque routeur est responsable de calculer les meilleurs chemins vers les destinations qu'il connaît, ce qui réduit la charge globale sur le réseau.</p>
<p><b>3. Convergence accélérée</b><br/>La convergence fait référence à la capacité du réseau à se rétablir rapidement après une panne ou un changement. Grâce au routage dynamique, les routeurs peuvent détecter les changements rapidement et mettre à jour les tables de routage en conséquence. Cela permet au réseau de converger rapidement vers un nouvel état stable, minimisant ainsi les temps d'indisponibilité.</p>
<p>Néanmoins avec le routage dynamique, le temps requis pour délivrer un message n'est pas garanti. En effet, lorsqu'un paquet est envoyé à travers un réseau, il peut emprunter différents chemins pour atteindre sa destination. Ces chemins peuvent avoir des longueurs (métriques) différentes, des délais de transmission différents ou des congestions variables. En raison de ces variations potentielles, il est impossible de garantir un temps de livraison constant pour les paquets.</p>
<p>De plus, les décisions de routage prises par les routeurs sont basées sur des informations partielles et des estimations de l'état actuel du réseau. Ces informations sont échangées entre les routeurs via des protocoles de routage, mais elles peuvent être incomplètes ou prendre un certain temps pour se propager à travers le réseau. Par conséquent, les routeurs peuvent prendre des décisions basées sur des informations qui ne sont pas à jour, ce qui peut affecter les délais de livraison des paquets.<br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
