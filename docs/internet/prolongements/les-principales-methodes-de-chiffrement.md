# Les principales méthodes de chiffrement

<div class="imported-content">

<p class="scrap-without-first-image"></p><p><b>Chiffrement symétrique</b></p>
<ul><li>Le chiffrement symétrique utilise la même clé pour le chiffrement et le déchiffrement des données.</li><li>Il est rapide et efficace pour chiffrer de grandes quantités de données.</li><li>Les algorithmes couramment utilisés s'appuient sur l'AES (Advanced Encryption Standard) et le 3DES (Triple Data Encryption Standard).</li></ul><p>Exemple : Sarah souhaite envoyer un message confidentiel à Hugo. Ils décident d'utiliser l'algorithme AES avec une clé partagée secrète.</p>
<ul><li>Sarah chiffre le message en utilisant la clé partagée, créant ainsi un texte chiffré.</li><li>Elle envoie le texte chiffré à Hugo.</li><li>Hugo utilise la même clé partagée pour déchiffrer le texte et récupérer le message d'origine.</li></ul><p><b>Chiffrement asymétrique</b></p>
<ul><li>Le chiffrement asymétrique mobilise une paire de clés : une clé publique pour le chiffrement et une clé secrète privée pour le déchiffrement.</li><li>Il permet un échange sécurisé de clés et des communications confidentielles entre les parties.</li><li>Les algorithmes couramment utilisés s'appuient sur RSA, Diffie-Hellman et ECC (Elliptic Curve Cryptography).</li></ul><p>Exemple : Hugo souhaite envoyer un message confidentiel à Sarah. Ils décident d'utiliser l'algorithme RSA.</p>
<ul><li>Sarah génère une paire de clés : une clé publique et une clé privée. Elle partage la clé publique avec Hugo.</li><li>Hugo chiffre le message en utilisant la clé publique de Sarah, créant ainsi un texte chiffré.</li><li>Hugo envoie le texte chiffré à Sarah.</li><li>Sarah utilise sa clé privée correspondante pour déchiffrer le texte et récupérer le message d'origine.</li></ul><p><b>Fonctions de hachage</b></p>
<ul><li>Les fonctions de hachage convertissent des données de taille variable en une empreinte fixe.</li><li>Elles sont principalement utilisées pour vérifier l'intégrité des données et pour stocker des mots de passe de manière sécurisée.</li><li>Les algorithmes couramment utilisés s'appuient sur MD5, SHA-1, SHA-256 et SHA-3.</li></ul><p><b>Signature numérique</b></p>
<ul><li>Les signatures numériques sont utilisées pour vérifier l'authenticité et l'intégrité des données.</li><li>Elles sont créées en utilisant une clé privée pour chiffrer un hachage des données, et la vérification est effectuée à l'aide de la clé publique correspondante.</li><li>Les algorithmes couramment utilisés s'appuient sur RSA et DSA (Digital Signature Algorithm).</li></ul><p><b>Échange de clés</b></p>
<ul><li>Les protocoles d'échange de clés sont utilisés pour établir des clés de chiffrement symétriques entre des parties.</li></ul><p>Les protocoles couramment utilisés s'appuient sur Diffie-Hellman, ECDH (Elliptic Curve Diffie-Hellman) et IKE (Internet Key Exchange).</p>
<p><img class="imported-image" data-height="450" data-original-url="media%2For%2F551774219%3Fhid%3Dm_3367" data-width="750" id="m_3367" loading="lazy" src="/Manuel-SNT/assets/imported/internet-prolongements-les-principales-methodes-de-chiffrement-html/image-01.jpg"/></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
