# Le format JSON et sa syntaxe

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>JSON est l'acronyme de "JavaScript Object Notation". Il s'agit d'un format de données léger, facile à lire, à comprendre et à écrire pour les humains, ainsi qu'à analyser et à générer pour les machines. JSON est devenu un format de données très répandu dans les applications Web et les API car il est facile à intégrer avec des langages de programmation tels que JavaScript, Python, Java, etc.</p>
<p>La syntaxe JSON est basée sur la notation de tableau et d'objet JavaScript. Les données sont stockées sous forme de paires clé-valeur dans des objets, ou sous forme de tableaux de valeurs. Les objets {objet} sont délimités par des accolades et les tableaux [tableau] sont délimités par des crochets. Les valeurs sont généralement des chaînes de caractères, des nombres, des booléens, des tableaux ou des objets imbriqués.</p>
<p>Voici un exemple simple permettant d'illustrer le codage d'un objet en JSON :</p>
<p>--------------------------------</p>
<p>{</p>
<p>     "nom" : "John DOE",</p>
<p>     "age" : 39,</p>
<p>     "ville" : "Paris",</p>
<p>     "pays" : "France",</p>
<p>     "passions" : ["voyages", "musique", "sport"]</p>
<p>}</p>
<p>-------------------------------<br/></p>
<p>Dans cet exemple, nous avons un objet qui contient cinq paires clés-valeurs. La clé est toujours une chaîne de caractères entourée de guillemets et suivie de deux-points. La valeur peut être de n'importe quel type de données valide, y compris une chaîne de caractères, un nombre, un booléen, un tableau ou un objet. Au sein d'un objet, les paires clés-valeurs sont séparées par des virgules.<br/></p>
<p>Un fichier JSON possède l'extension json. Les objets sont séparés par une virgule.</p>
<p>Pour être valide en JSON, les objets doivent être définis dans une structure de données JSON unique, telle qu'un tableau [...] ou un objet {...}. Dans l'exemple ci-dessous, les 2 objets sont définis dans un tableau.</p>
<p>-------------------------------<br/></p>
<p>[<br/></p>
<p>    {<br/></p>
<p>          "id": 1,<br/></p>
<p>          "nom": "Dupont",<br/></p>
<p>          "prenom": "Paul",<br/></p>
<p>          "age": 32,<br/></p>
<p>          "ville": "Paris"<br/></p>
<p>     },<br/></p>
<p>     {<br/></p>
<p>          "id": 2,<br/></p>
<p>          "nom": "Martin",<br/></p>
<p>          "prenom": "Sophie",<br/></p>
<p>          "age": 28,<br/></p>
<p>          "ville": "Lyon"<br/></p>
<p>     }<br/></p>
<p> ] </p>
<p>-------------------------------<br/></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
