# Récupérer le message codé avec Python - Exercice 2

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Partie 2 : décodage du message caché</p>
<p>On donne la bibliothèque nécessaire ainsi que les fonctions qui permettent d'extraire le code du message de l'image et de déchiffrer le message :<br/></p>
<p><i>from PIL import Image</i></p>
<p><i>def decode64(codein):</i><br/><i>    code64 = {'000000': 'A', '000001': 'B', '000010': 'C', '000011': 'D', </i><br/><i>              '000100': 'E', '000101': 'F', '000110': 'G', '000111': 'H', </i><br/><i>              '001000': 'I', '001001': 'J', '001010': 'K', '001011': 'L', </i><br/><i>              '001100': 'M', '001101': 'N', '001110': 'O', '001111': 'P', </i><br/><i>              '010000': 'Q', '010001': 'R', '010010': 'S', '010011': 'T', </i><br/><i>              '010100': 'U', '010101': 'V', '010110': 'W', '010111': 'X', </i><br/><i>              '011000': 'Y', '011001': 'Z', '011010': 'a', '011011': 'b', </i><br/><i>              '011100': 'c', '011101': 'd', '011110': 'e', '011111': 'f', </i><br/><i>              '100000': 'g', '100001': 'h', '100010': 'i', '100011': 'j', </i><br/><i>              '100100': 'k', '100101': 'l', '100110': 'm', '100111': 'n', </i><br/><i>              '101000': 'o', '101001': 'p', '101010': 'q', '101011': 'r', </i><br/><i>              '101100': 's', '101101': 't', '101110': 'u', '101111': 'v', </i><br/><i>              '110000': 'w', '110001': 'x', '110010': 'y', '110011': 'z', </i><br/><i>              '110100': '0', '110101': '1', '110110': '2', '110111': '3', </i><br/><i>              '111000': '4', '111001': '5', '111010': '6', '111011': '7', </i><br/><i>              '111100': '8', '111101': '9', '111110': ' ', '111111': '.'}</i><br/><i>    return code64[codein]</i></p>
<p><i>def decode(pixel):</i><br/><i>    """ Permet de récupérer le code binaire sur 6 bits dans les trois composantes </i><br/><i>    RVB de pixel. Le code se trouve dans les deux bits de poids faible de </i><br/><i>    chaque composante"""</i><br/><i>    r = pixel[0] &amp; 0b11</i><br/><i>    v = pixel[1] &amp; 0b11</i><br/><i>    b = pixel[2] &amp; 0b11</i><br/><i>    rvb = r*16 + v*4 + b</i><br/><i>    rvbb = bin(rvb)[2:]</i><br/><i>    while len(rvbb) &lt; 6:</i><br/><i>        rvbb = '0'+rvbb</i><br/><i>    return rvbb</i></p>
<p>Vous allez découvrir le message caché dans l'image. Pour chaque composante RVB de chaque pixel de l'image il faut :</p>
<ul><li>récupérer le code binaire 6 bits du message,<br/></li><li>traduire le code binaire en caractère,<br/></li><li>ajouter le caractère dans message,</li><li>interrompre la boucle (break) si le caractère est le point.</li></ul><p>Il faut ensuite afficher le message.</p>
<p>2. Compléter le programme suivant :</p>
<p><i>img_codee = "tigreCode.bmp"</i><br/><i>message = ""</i><br/><i>listeimage = []</i><br/><i>img = Image.open(img_codee)</i><br/><i>dataimage = img.getdata()</i><br/><i>for pixel in dataimage:</i><br/></p>
<p><i>    # A compléter</i></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
