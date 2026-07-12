# Traitement des données avec Python

<div class="imported-content">

<p>On souhaite réaliser une fonction explore qui traduit les titres de plusieurs pages (p1, p2, p3...) en codes, comme vu dans la présentation.<br/></p>
<p>P3 = "Le chat perdu et l'enfant" --&gt; 3070 3161 3052</p>
<p>2. Copiez et complétez le programme suivant :</p>
<p>liste_mots = ["vie", "saison", "continent", "femme", "homme", "enfant", </p>
<p>              "monde", "chat", "voiture", "couleur", "quatre", "cinq", </p>
<p>              "rouge", "bleu", "meilleur", "belle", "perdu", "est", </p>
<p>              "sont", "dans", "ont", "garage", "fou", "folle", "doué"]</p>
<p>def trouve_mot(mot):</p>
<p>    """renvoie l'index du mot si le mot est dans la liste"""</p>
<p>    for m in liste_mots:</p>
<p>        if m in mot:</p>
<p>            return .....................................</p>
<p>    return None</p>
<p>def explore(p, phrase):</p>
<p>    """convertit la phrase de la page p en codes"""</p>
<p>    code = ""</p>
<p>    mots = .................................................# convertir la phrase en une liste de mots</p>
<p>    i = 0</p>
<p>    for mot in mots:</p>
<p>        id_mot = trouve_mot(mot)</p>
<p>        if id_mot ...........................:</p>
<p>            code += f"{p}{id_mot:02}{i} "</p>
<p>            i .......................</p>
<p>    return code    </p>
<p>phrases = ["La vie est belle",</p>
<p>           "Les quatre saisons",</p>
<p>           "La couleur rouge de la vie",</p>
<p>           "Le chat perdu et l'enfant",</p>
<p>           "Le garage à voitures"]</p>
<p>liste_codes = []</p>
<p>for i, phrase in enumerate(phrases):</p>
<p>    code = explore(i, phrase)</p>
<p>    print(f"'{phrase}' a pour code : {code}")</p>
<p>    liste_codes += code.strip().split(" ") # stocker les codes dans une liste</p>
<p><br/></p>
<p>Le moteur de recherche doit indiquer les pages contenant des mots clés. L'internaute peut, par exemple, demander les pages contenant le mot clé "vie".</p>
<p>3. Complétez le code suivant</p>
<p>def recherche(mot):</p>
<p>    id_mot = ........................................</p>
<p>    reponse = ""</p>
<p>    for m in .........................:</p>
<p>        if f"{id_mot:02}" in m[1:-1]:</p>
<p>            reponse += f"p{m[0]} "</p>
<p>    return ...................</p>
<p># recherche internet du mot "vie" sur l'ensemble des phrases stockées sous forme de code</p>
<p>mot = "vie"</p>
<p>reponse = .....................................</p>
<p>print(f"le mot '{mot}' est dans {reponse}")</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
