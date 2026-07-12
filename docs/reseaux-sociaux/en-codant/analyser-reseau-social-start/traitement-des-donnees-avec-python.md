# Traitement des données avec Python

<div class="imported-content">

<p>Afin de modéliser notre réseau social, on donne le programme suivant, presque complet  :</p>
<p><i>def est_follower(liste, nom1, nom2):</i><br/><i>    if nom2 in liste[nom1]:</i><br/><i>        return "Oui"</i><br/><i>    return "Non"</i></p>
<p><i>def nb_followers(liste, nom):</i><br/><i>    nb = 0</i><br/><i>    for f in liste:</i><br/><i>        if nom in liste[f]:</i><br/><i>            nb += 1</i><br/><i>    return nb</i></p>
<p><i># Programme principal</i><br/><i>followers = {"Alban":["Béatrice", "Déborah", "Cristelle"],</i><br/><i>          "Béatrice":["Alban"],</i><br/><i>          ...........................}</i></p>
<p><i>print("Déborah suit Fabrice ? ", .....................................................................)</i></p>
<p><br/></p>
<p><i>1. Complétez le modèle (dictionnaire) followers du programme principal</i><br/></p>
<p><i>2. Affichez dans la console la réponse à la question </i>"Déborah suit Fabrice ? "<br/></p>
<p>3. <i>Affichez dans la console la réponse à la question </i>"Déborah suit Gladys ? "</p>
<p>4. <i>Affichez dans la console </i>le nombre de followers de Déborah</p>
<p>5. <i>Affichez dans la console </i>le nombre d'abonnés du réseau</p>
<p>On souhaite programmer l’évolution du nombre d’abonnés du réseau social en considérant qu'il a été fondé en 2008. Le nombre d’abonnés est multiplié par 1,2 chaque année et on considère qu’avant 2008, il n’y en avait pas.</p>
<p>6. Ecrivez la fonction <i>abonnes</i> qui permet de connaître le nombre d’abonnés en <i>an = 2030</i>. On donne :</p>
<p><i>print("nombre d'abonnés prévu en 2030 : ", abonnes(2030))</i></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
