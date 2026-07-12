# Analyse d'une requête web - Questions

<div class="imported-content">

<p><img class="imported-image ptSynthesisImg" data-height="635" data-original-url="media%2For%2F551774425%3Fhid%3Dm_2268" data-width="750" id="m_2268" loading="lazy" src="/Manuel-SNT/assets/imported/le-web-exercices-analyse-d-une-requete-web-questions-html/image-01.jpg"/></p>
<p>L'outil de développement de Mozilla Firefox permet d'obtenir la capture d'écran précédente. On y trouve des éléments utiles pour l'analyse de la communication entre le navigateur et le serveur web lors de la consultation d'une page d'un site.<br/>Lors de la visite du site "<a href="https://example.com" rel="noopener" target="_blank">https://example.com</a>" on observe deux requêtes. Sur l'une d'entre elles figurent les informations ci-dessous.<br/><br/><b>En-têtes de la requête (548 o) :</b></p>
<p>GET / HTTP/2<br/>Host: example.com<br/>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0<br/>Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8<br/>Accept-Language: fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3<br/>Accept-Encoding: gzip, deflate, br<br/>Connection: keep-alive<br/>Upgrade-Insecure-Requests: 1<br/>Sec-Fetch-Dest: document<br/>Sec-Fetch-Mode: navigate<br/>Sec-Fetch-Site: none<br/>Sec-Fetch-User: ?1<br/>If-Modified-Since: Thu, 17 Oct 2019 07:18:26 GMT<br/>If-None-Match: "3147526947+gzip"<br/>TE: trailers<br/></p>
<p><b>En-têtes de la réponse (322 o) :</b></p>
<p>HTTP/2 304 Not Modified<br/>accept-ranges: bytes<br/>age: 175712<br/>cache-control: max-age=604800<br/>date: Sun, 02 Jul 2023 05:13:36 GMT<br/>etag: "3147526947+gzip"<br/>expires: Sun, 09 Jul 2023 05:13:36 GMT<br/>last-modified: Thu, 17 Oct 2019 07:18:26 GMT<br/>server: ECS (dcb/7EA2)<br/>vary: Accept-Encoding<br/>x-cache: HIT<br/>X-Firefox-Spdy: h2<br/></p>
<p>1. Précisez quel est l'émetteur de la requête et l'émetteur de la réponse.</p>
<p>2. Quelle est la version du protocole HTTP utilisée ? Qu'est-ce que cela signifie ?</p>
<p>3. Quelle est la méthode du protocole HTTP utilisée lors de la requête ?</p>
<p>4. Quel est le code de la réponse HTTP ? Quelle est sa signification ?</p>
<p>5. Décomposez l'URL "example.com" afin de faire apparaître les différents éléments qui la constituent.</p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
