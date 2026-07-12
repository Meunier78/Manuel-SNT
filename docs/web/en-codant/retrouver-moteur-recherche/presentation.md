# Présentation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Cette activité propose de vous faire découvrir comment un moteur de recherche indexe les différentes pages web qu'il a en mémoire.</p>
<p>Un moteur de recherche doit charger périodiquement toutes les pages web qu’il désire indexer. Il dispose de plusieurs robots qui chargent les pages web en parallèle. Ils se répartissent les adresses URL de façon équitable pour qu’une même URL ne soit pas chargée deux fois : on pourrait imaginer qu’un robot charge toutes les URL débutant par « A », un autre, celles débutant par « B », et ainsi de suite.<br/></p>
<p>En pratique, on définit plutôt une fonction de hachage qui convertit l’URL en un nombre.</p>
<p>Soit la liste de vingt cinq mots :<br/>00 vie(s), 01 saison(s), 02 continent(s), 03 femme(s), 04 homme(s), 05 enfant(s), 06 monde(s), 07 chat(s), 08 voiture(s), 09 couleur(s), 10 quatre, 11 cinq, 12 rouge(s), 13 bleu(es), 14 meilleur(es), 15 belle(s), 16 perdu(es), 17 est, 18 sont, 19 dans, 20 ont, 21 garage(s), 22 fou(s), 23 folle(s), 24 doué(es).</p>
<p>1. Écrire une phrase qui représente le titre d'une page web, avec 3 ou 4 mots clés choisis dans la liste. Les articles LE, LA, L’, LES, UN, UNE, DE, D’, DES etc. et les adjectifs possessifs MON, SA, SES, SON etc. ne sont pas comptés.<br/></p>
<p>Le moteur de recherche peut maintenant indexer l’ensemble de la phrase en commençant par la page, le mot puis sa position dans la phrase.<br/>Exemple pour une page 3 : « Le chat perdu et l'enfant » ce qui donne : 3070, 3161, <u>3052</u> (<b>3</b> P3 - mot <b>05</b> - position <b>2</b>).<br/></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
