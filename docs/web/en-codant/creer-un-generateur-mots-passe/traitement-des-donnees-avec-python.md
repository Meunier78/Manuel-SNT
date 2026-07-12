# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Nous allons créer une fonction qui génère un mot de passe constitué de n1 majuscules, n2 minuscules, n3 nombres et n4 caractères spéciaux, tous choisis dans trois listes.<br/></p>
<p>1. Complétez la fonction gene_mdp</p>
<p><i>from random import choice, shuffle</i><br/><i>ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',</i><br/><i>            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']</i><br/><i>NB = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']</i><br/><i>SPE = ['&amp;', '-', '@', '*', '+', '%', '$', '/', '?', '!', ':', '&lt;', '&gt;']</i></p>
<p><i>def gene_mdp(n1, n2, n3, n4):</i><br/><i>    mdp = []</i><br/><i>    for _ in range(n1):</i><br/><i>        mdp += [choice(ALPHABET)]</i><br/><i>    ....... # A compléter, plusieurs lignes !</i><br/><i>    shuffle(mdp)</i><br/><i>    mdp = ''.join(mdp)</i><br/><i>    return mdp</i></p>
<p><i>mdp = gene_mdp(2, 4, 4, 2)</i><br/><i>print(mdp)</i></p>
<p><br/></p>
<p>On propose de vérifier si un login entré par l'utilisateur fait au moins six caractères et que chaque caractère est alphanumérique. </p>
<p>2. Complétez le fonction verif_login</p>
<p><i>def verif_login(login):</i><br/><i>    if ............................:</i><br/><i>        return "login incorrect !"</i><br/><i>    for c in login:</i><br/><i>        if c.upper() .........................and...................................:</i><br/><i>            return "login incorrect !"</i><br/><i>    .........................................</i></p>
<p><i>login = input("Votre login : ")</i><br/><i>print(verif_login(login))</i></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
