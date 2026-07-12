# Gestion d'une bibliothèque : base de données relationnelle

<div class="imported-content">

<p class="scrap-without-first-image"></p><p>Pour gérer les livres d'une bibliothèque, une base de données relationnelle peut être utilisée. Une telle base de données contient plusieurs tables qui sont liées entre elles grâce à des clés primaires et étrangères. Une clé primaire permet d'identifier d'une manière unique chaque enregistrement d'une table. Une clé étrangère permet de lier des tables entre elles.<br/></p>
<p>Le schéma de la base de données comporte les tables ci-dessous.<br/></p>
<p><b>Table "Livre"</b> : cette table stocke des informations sur les livres de la bibliothèque, telles que l'ID du livre, le titre du livre, l'auteur, l'éditeur, l'année de publication, le nombre de pages, le code ISBN, etc. Les descripteurs de cette base sont les suivants :<br/></p>
<p>| ID_livre (clé primaire) | Titre | Auteur | Editeur | Annee_pub | Nbre_pages | ISBN | Cote |<br/></p>
<p><b>Table "Emprunt" </b>: cette table stocke des informations sur les emprunts de livres, telles que l'ID de l'emprunt, l'ID du livre, l'ID de l'utilisateur emprunteur, la date d'emprunt et la date de retour. Les descripteurs de cette base sont les suivants :<br/></p>
<p>| ID_emprunt (clé primaire) | ID_livre (clé étrangère) | ID_emprunteur (clé étrangère) | Date_emprunt | Date_retour |<br/></p>
<p><b>Table "Utilisateur" </b>: cette table stocke des informations sur les utilisateurs de la bibliothèque, tels que l'ID de l'utilisateur, le nom, le prénom, l'adresse, le numéro de téléphone, etc. Les descripteurs de cette base sont les suivants :<br/></p>
<p>| ID_emprunteur (clé primaire) | Nom | Prenom | Adresse | Telephone | Courriel |</p>
<p><br/></p>
<p>La table "Livre" est liée à la table "Emprunt" par l'ID du livre, qui sert de clé étrangère dans la table "Emprunt". La table "Emprunt" est également liée à la table "Utilisateur" par l'ID de l'utilisateur emprunteur, qui sert également de clé étrangère dans la table "Emprunt".</p>
<p>En utilisant cette base de données, il est possible de répondre à des questions telles que "Quels sont les livres actuellement empruntés ?", "Quels sont les utilisateurs qui ont emprunté un livre en particulier ?" ou encore "Combien de livres a emprunté un utilisateur donné ?".</p>
<p><img ="xl"="" class="imported-image" data-height="665" data-original-url="logo%2Fhash%2F551775420%3Fh%3Df81e58b44854fe570ae6fba48933d78b" data-width="1000" id="l_2349915" loading="lazy" src="/Manuel-SNT/assets/imported/donnees-structurees-traitement-prolongements-les-bases-donnees-structurees-gestion-d-une-bibliotheque-base-de-donnees-relationnelle-html/image-01.jpg"/></p>
<p><br/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
