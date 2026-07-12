# Traitement des données avec Python

<div class="imported-content">

<p>Nous allons travailler à partir du fichier "films.xml" qui comporte des informations sur quelques films et artistes. Notre démarche, limitée à une petite quantité de données, pourrait être utilisée sur des banques d'informations beaucoup plus conséquentes.  <br/></p>
<p>1. Observez le modèle xml du fichier et lancez le programme suivant :</p>
<p><i>import xml.etree.ElementTree as ET</i><br/><i>arbre = ET.parse("films.xml")</i><br/><i>racine = arbre.getroot()</i><br/><i>print("la balise racine est", racine.tag)</i><br/><i>print(racine[0][0].attrib)</i><br/><i>print(f"il y a {len(racine.findall('./FILMS/FILM/TITRE'))} films dans le fichier")</i><br/></p>
<p>2. Affichez le nombre de films ainsi que la liste de tous les films du fichier.</p>
<p>3. Affichez le résumé du film <i>Alien</i>.</p>
<p>4. Affichez les prénoms et noms de tous les artistes du fichier.</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
