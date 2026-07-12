# Créer une table de données avec des requêtes SQL

<div class="imported-content">

<div class="card">




<div id="note-text"><p class="scrap-without-first-image"></p><p>Considérons le fichier amis.csv dont le contenu est le suivant :</p>
<p>-------------------------------<br/></p>
<p>id, nom, prenom, age , ville</p>
<p>1, Dupont, Paul, 32, Paris</p>
<p>2, Martin, Sophie, 28, Lyon</p>
<p>3, Leclerc, Julie, 37, Nantes</p>
<p>-------------------------------<br/></p>
<p>La requête SQL permettant de créer la table amis avec les 5 descripteurs "id", "nom", "prenom", "age" et "ville" est la suivante :</p>
<p>-------------------------------</p>
<p>CREATE TABLE amis (</p>
<p>   id INT PRIMARY KEY,</p>
<p>   nom VARCHAR(255),</p>
<p>   prenom VARCHAR(255),</p>
<p>   age INT,</p>
<p>   ville VARCHAR(255),</p>
<p>);<br/></p>
<p>------------------------------<br/></p>
<p>Lors de la création de la table, on doit préciser pour chaque descripteur son type :<br/></p>
<ul><li>INT --&gt; integer / entier</li><li>VARCHAR(255) --&gt; chaîne de caractères codée sur 1 octet (8 bits)</li></ul><p>Le descripteur "id" sera la clé primaire de la table "amis" permettant d'identifier de manière unique chaque enregistrement de celle-ci.</p>
<p>On procède ensuite au peuplement de la table "amis" avec la requête SQL suivante :</p>
<p>------------------------------<br/></p>
<p>INSERT INTO amis (id, nom, prenom, age, ville)</p>
<p>VALUES (1, 'Dupont',  'Paul', 32, 'Paris'),</p>
<p>              (2, 'Martin',  'Sophie', 28, 'Lyon'),</p>
<p>              (3, 'Leclerc',  'Julie', 37, 'Nantes');<br/></p>
<p>------------------------------<br/></p>
<p>Une fois la table de données créée et peuplée, on peut extraire les données à l’aide d’une requête SQL SELECT. En combinant la requête SELECT avec WHERE, ORDER BY et GROUP BY il est possible de filtrer et trier les données selon les besoins de l’utilisateur.</p>
<p><br/></p>
<p><img ="xl"="" class="imported-image" data-height="873" data-original-url="logo%2Fhash%2F551775424%3Fh%3D5d633224a64b6d89721027b3c2116706" data-width="1000" id="l_2345829" loading="lazy" src="/Manuel-SNT/assets/imported/donnees-structurees-traitement-prolongements-les-bases-donnees-structurees-creer-une-table-de-donnees-avec-des-requetes-sql-html/image-01.jpg"/></p>
<p><br/></p>
<p><br/><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
