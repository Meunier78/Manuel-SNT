# Les étapes des requêtes et des réponses HTTP

<div class="imported-content">

<div class="card">




<div id="note-text"><p><img ="xl"="" class="ptSynthesisImg imported-image" data-height="646" data-original-url="logo%2Fhash%2F551774366%3Fh%3D67f851246012ef49be53934ebf8d6228" data-width="1000" id="l_2423416" loading="lazy" src="/Manuel-SNT/assets/imported/le-web-cours-modele-client-serveur-sur-web-les-etapes-des-requetes-et-reponses-http-html/image-01.jpg"/></p>
<p><b>1. Établissement de la connexion</b><br/></p>
<p>Lorsqu'un client souhaite accéder à un site web, il envoie une requête au serveur. Pour les requêtes HTTPS, une couche de sécurité supplémentaire est ajoutée à l'aide d'un protocole appelé SSL/TLS (Secure Sockets Layer/Transport Layer Security). Cette couche de sécurité crypte les données échangées entre le client et le serveur pour protéger la confidentialité des informations.<br/></p>
<p><b>2. Méthodes de requête  </b><br/></p>
<p>Une fois la connexion établie, le client utilise une méthode HTTP spécifique pour envoyer une requête au serveur. Les méthodes les plus couramment utilisées sont :<br/></p>
<ul><li><b>GET</b> : Demande au serveur de renvoyer une ressource spécifique (par exemple, une page HTML, une image) au client.<br/></li><li><b>POST</b> : Envoie des données au serveur pour être traitées, souvent utilisé pour soumettre des formulaires en ligne ou effectuer des transactions.<br/></li><li><b>PUT</b> : Envoie des données au serveur pour être stockées ou mises à jour.<br/></li><li><b>DELETE</b> : Demande au serveur de supprimer une ressource spécifique.</li></ul><p>Il existe également d'autres méthodes telles que HEAD, OPTIONS, PATCH, etc., chacune ayant sa propre utilité.</p>
<p><b>3. En-têtes de requête</b><br/></p>
<p>Les requêtes HTTP/HTTPS contiennent également des en-têtes qui fournissent des informations supplémentaires au serveur. Par exemple, les en-têtes peuvent indiquer le type de contenu qu'un client a accepté, la langue préférée, les informations sur le navigateur, les cookies, etc. <br/></p>
<p><b>4. Corps de la requête</b><br/></p>
<p>Pour certaines méthodes, telles que POST et PUT, les données sont incluses dans le corps de la requête. Le corps peut contenir des informations structurées telles que des formulaires HTML ou des données JSON qui sont traitées par le serveur. <br/></p>
<p><b>5. Traitement de la requête par le serveur</b><br/></p>
<p>Le serveur reçoit une demande d'un client, analyse les informations de demande, prend une action appropriée sur la base du procédé de demande et génère une réponse appropriée.<br/></p>
<p><b>6. Réponse du serveur  </b><br/></p>
<p>Le serveur renvoie une réponse au client contenant un code d'état HTTP indiquant le résultat de la requête (par exemple, 200 OK si la requête a abouti, 404 Not Found si la ressource n'a pas été trouvée, etc.). La réponse peut également contenir des en-têtes de réponse contenant des informations complémentaires et un corps de réponse contenant les données demandées (page HTML, image, etc.). <br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
