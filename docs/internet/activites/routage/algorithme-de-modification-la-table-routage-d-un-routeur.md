# Algorithme de modification de la table de routage d'un routeur

<div class="imported-content">

<div class="card">




<div id="note-text"><p><img class="imported-image ptSynthesisImg" data-height="906" data-original-url="media%2For%2F551774012%3Fhid%3Dm_17057" data-width="750" id="m_17057" loading="lazy" src="/Manuel-SNT/assets/imported/internet-activites-routage-algorithme-de-modification-la-table-routage-d-un-routeur-html/image-01.jpg"/></p>
<p>En réalité, personne ne dispose d'une carte complète et précise d'Internet, et cela n'est absolument pas nécessaire pour le routage. Ce qui importe, c'est que chaque routeur connaisse l'état de ses voisins immédiats et puisse indiquer la direction à prendre pour chaque information transmise, sans avoir connaissance de l'ensemble du chemin à parcourir. Mais comment s'assurer qu'il indique la bonne direction ? Cela est rendu possible grâce à un algorithme, par lequel chaque routeur, dès qu'il est informé d'un changement d'état chez l'un de ses voisins immédiats, informe à son tour les autres voisins de ce changement. Ces derniers pourront éventuellement modifier la direction qu'ils indiqueront aux futurs messages. Ainsi, l'information sur les changements du réseau se propage progressivement, et en temps réel, chaque routeur adapte sa table de routage en conséquence.<br/><br/>L'algorithme ci-dessus résume, d'une manière simplifiée, l'adaptation de la table de routage d'un routeur lorsque celui-ci est informé qu'un routeur voisin, nommé M, est en panne, inaccessible ou a été supprimé. La procédure décrite est mise en œuvre pour une destination donnée notée X.</p>
<p><br/></p>
<p><br/></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
