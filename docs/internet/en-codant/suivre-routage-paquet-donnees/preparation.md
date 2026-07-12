# Préparation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Le réseau étudié mobilise un switch, deux routeurs ainsi que des ordinateurs portables et des serveurs.</p>
<p>Le switch utilise une table ARP pour associer une adresse IP avec une adresse MAC.<br/></p>
<p>Le routeur utilise une table de routage pour déterminer la route vers une adresse IP.</p>
<p>Le serveur DNS associe une adresse IP à un nom de domaine.</p>
<p>Pour convertir une chaîne de caractères en une liste en utilisant l'espace comme séparateur, on peut utiliser la méthode split :</p>
<p><i>chaine = "toto le héro"</i></p>
<p><i>chaine.split(" ")</i> renvoie ['toto', 'le', 'héro']</p>
<p>Une liste permet de stocker des éléments que l'on peut rappeler à l'aide de leurs indices :<br/></p>
<p><i>liste = ['a', 'b', 'c']</i></p>
<p><i>liste[0]</i> renvoie a    <i>liste[1]</i> renvoie b</p>
<p>join permet de convertir une liste de caractères en chaîne de caractères :</p>
<p><i>''.join(une_liste)</i> renvoie abcd</p>
<p>Un dictionnaire stocke également des éléments mais sous forme de couple clé/valeur. Il faut utiliser la clé et non un indice pour obtenir la valeur :</p>
<p><i>fruits = {'pomme':'rouge', 'poire':'jaune', 'banane':'jaune', 'abricot':'orange'}</i></p>
<p><i>fruits['banane'] </i>renvoie jaune</p>
<p>La valeur peut être une liste :</p>
<p><i>fruits = {'pomme':['rouge', 'verte', 'jaune'], 'poire':'jaune', 'banane':'jaune', 'abricot':'orange'}</i></p>
<p><i>fruits['pomme'] </i>renvoie ['rouge', 'verte', 'jaune']</p>
<p>On peut connaître le nombre d'éléments dans une liste ou un dictionnaire avec la fonction len :</p>
<p><i>len(fruits) </i>renvoie 4    <i>len(fruits['pomme'])</i> renvoie 3</p>
<p>On peut convertir un entier en une chaîne de caractère avec str et inversement avec int : </p>
<p><i>str(100)</i> renvoie '100'    <i>int('100')</i> renvoie 100</p>
<p>On inverse un entier (ou une chaîne représentant un entier) sur huit bits avec :</p>
<p><i>256+~int('255')</i> renvoie 0</p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
