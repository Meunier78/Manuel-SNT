# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Ouvrez un IDE Python et dans un nouveau document, importez les bibliothèques nécessaires :<br/><i>import json</i><br/><i>import urllib.request</i><br/>Maintenant appelons le web service :<br/><i>response = urllib.request.urlopen("url de l'adresse précédente")</i><br/>Chargez la réponse JSON dans une structure de données Python :<br/><i>result = json.loads(response.read())</i><br/>et affichez le résultat.<br/><br/>Exécutez le programme. Normalement vous devriez retrouver exactement le même affichage que sur le site en ligne.<br/><br/></p>
<p>Un dictionnaire en python est une sorte de liste où l’on utilise des clés alphanumériques associées à des valeurs. Pour ajouter des valeurs à un dictionnaire, il faut indiquer une clé ainsi qu'une valeur.<br/><u>Exemple </u>:<br/><i>a = {}</i><br/><i>a["nom"] = "Turing"</i><br/><i>a["prenom"] = "Alan"</i><br/><i>print(a)</i> --&gt; {'nom': 'Turing', 'prenom': 'Alan'}<br/><br/>La méthode <i>get()</i> vous permet de récupérer une valeur dans un dictionnaire :<br/><i>data = {"name": "Turing", "age": 45}</i><br/><i>data.get("name")</i> --&gt; 'Turing'<br/><br/>Pour en savoir plus sur les <a href="https://python.doctor/page-apprendre-dictionnaire-python" rel="noopener" target="_blank"><u>dictionnaires</u></a>.<br/></p>
<p><br/>Maintenant affichons les informations de façon plus lisible. D’abord, cherchons le nombre de personnes présentes dans l'espace :<br/><i>print("People in Space", result["???"])</i></p>
<p>3. Que faut-il marquer à la place des points d’interrogation ?<br/></p>
<p>La valeur associée à la clé ‘people’ est une liste de dictionnaires ! Mettons cette valeur dans une variable pour pouvoir l’utiliser :<br/><i>people = result["people"]</i><br/>Affichez cette variable.<br/>Maintenant nous avons besoin d’afficher une ligne pour chaque astronaute. Utilisez une boucle ‘for’ pour le faire. À chaque passage dans la boucle, p correspondra à un dictionnaire d’un astronaute différent.<br/><i>for p in ??? :</i><br/><i>print(p["???"])</i><br/></p>
<p><br/></p>
<p>4. Complétez ce bout de code pour afficher les noms des astronautes présents dans l'espace. Nous utilisons les données en direct donc le résultat dépendra du nombre de personnes actuellement dans l’espace. Que faut-il marquer à la place des points d’interrogation ?<br/></p>
<p>Comme pour le nom des astronautes, le web service fournit le nom du vaisseau dans lequel il se trouve.</p>
<p>5. Modifiez le script pour qu’il affiche aussi le nom du vaisseau dans lequel se trouve l’astronaute ? Quelle instruction doit-on trouver dans la boucle précédente ?<br/></p>
<p>6. <b> </b>Modifiez votre code pour n'afficher que les occupant de l'ISS.</p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
