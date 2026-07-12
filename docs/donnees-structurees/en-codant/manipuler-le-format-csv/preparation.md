# Préparation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Créez un dossier de travail dans lequel vous placerez le fichier csv ainsi que le fichier py. Téléchargez le fichier CSV en le renommant "villes_virgule.csv" et ouvrez le avec NodePad++ (ou un autre éditeur de texte).<br/></p>
<p>1. Combien de villes sont répertoriées ?<br/></p>
<p>2. Donnez la surface et la population de Paris en 2012.<br/></p>
<p>3. Ouvrez ce fichier avec un tableur tel que Excel ou Libre office Calc (jeu de caractère unicode utf-8) de manière à visualiser et travailler sur les différentes colonnes.</p>
<ul><li>Sur <b>Excel</b>, sélectionnez toute la colonne, puis "Données" et "Convertir" puis choisissez la virgule comme séparateur (vérifiez dans les options avancées du format que le point décimal soit sélectionné). Voir vidéo "excel_csv"</li><li>Sur <b>Libre office Calc</b>, sélectionnez la langue anglaise et la virgule comme séparateur.</li></ul><p>4. Triez le tableau par densité de population de la moins forte à la plus forte. Combien de villes ont une densité supérieure à 10 000 habitants par kilomètre carré ?<br/></p>
<p>Pour traiter des données, nous allons utiliser la bibliothèque Python Pandas qui permet la manipulation et l'analyse des données. On donne :<br/></p>
<p><i>import pandas</i><br/><i>villes = pandas.read_csv("villes_virgule.csv") #L’objet « villes » contient le fichier</i><br/></p>
<p>Il est possible de récupérer certaines données du tableau, par exemple, certaines lignes, certaines colonnes ou bien encore des valeurs uniques. Pour cela, il suffit d'utiliser la méthode « loc » avec les index des lignes et les index des colonnes. Le principe de fonctionnement de « loc » est relativement simple puisque l'on aura une instruction de la forme « villes.loc[index_ligne, index_colonne] ».<br/>On peut aussi récupérer toutes les lignes d’une colonne « villes.loc[:, index_colonne] » ou toutes les colonnes d’une ligne « villes.loc[index_ligne, :] ». Index_ligne ou index_colonne peut prendre la forme d’un numéro ou d’un test.<br/></p>
<p><b>Exemple</b> :<br/><i>print(villes.loc[villes["nom"]=="Paris", ["dens"]])</i><br/><i>print("************************")</i><br/><i>print(villes.loc[30437, :])</i></p>
<p>La méthode mean() permet de calculer une moyenne. On l’utilise avec « villes.loc[index_ligne, index_colonne].mean() »</p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
