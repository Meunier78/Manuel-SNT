# Insérer une message codé avec Python - Exercice 1

<div class="imported-content">

<p>Partie 1 : encodage de l'image avec le message</p>
<p>On donne la bibliothèque et les variables nécessaires ainsi que les fonctions qui permettent de chiffrer le message et de l'insérer dans l'image :</p>
<p><i>from PIL import Image</i><br/><i>image = "tigre.jpg"</i><br/><i>image_codee = "tigreCode.bmp"</i><br/><i>listeimage = []</i></p>
<p><i>def encode64(codein):</i><br/><i>    code64 = {"A":"000000", "B":"000001", "C":"000010", "D":"000011", </i><br/><i>              "E":"000100", "F":"000101", "G":"000110", "H":"000111", </i><br/><i>              "I":"001000", "J":"001001", "K":"001010", "L":"001011", </i><br/><i>              "M":"001100", "N":"001101", "O":"001110", "P":"001111", </i><br/><i>              "Q":"010000", "R":"010001", "S":"010010", "T":"010011", </i><br/><i>              "U":"010100", "V":"010101", "W":"010110", "X":"010111", </i><br/><i>              "Y":"011000", "Z":"011001", "a":"011010", "b":"011011", </i><br/><i>              "c":"011100", "d":"011101", "e":"011110", "f":"011111", </i><br/><i>              "g":"100000", "h":"100001", "i":"100010", "j":"100011", </i><br/><i>              "k":"100100", "l":"100101", "m":"100110", "n":"100111", </i><br/><i>              "o":"101000", "p":"101001", "q":"101010", "r":"101011", </i><br/><i>              "s":"101100", "t":"101101", "u":"101110", "v":"101111", </i><br/><i>              "w":"110000", "x":"110001", "y":"110010", "z":"110011", </i><br/><i>              "0":"110100", "1":"110101", "2":"110110", "3":"110111", </i><br/><i>              "4":"111000", "5":"111001", "6":"111010", "7":"111011", </i><br/><i>              "8":"111100", "9":"111101", " ":"111110", ".":"111111"}    </i><br/><i>    return code64[codein]</i><br/><i>    </i><br/><i>def stegano(pixel, code):</i><br/><i>    """ Remplace les deux bits de poids faible de chaque composante RVB de </i><br/><i>    pixel par deux bits du code """</i><br/><i>    r = (pixel[0]&amp;0b11111100)|(int(code[0])*2+int(code[1]))</i><br/><i>    v = (pixel[1]&amp;0b11111100)|(int(code[2])*2+int(code[3]))</i><br/><i>    b = (pixel[2]&amp;0b11111100)|(int(code[4])*2+int(code[5]))</i><br/><i>    return (r,v,b)</i></p>
<p>Vous devez insérer votre message secret dans l'image. Un index i est initialisé à 0. Pour chaque pixel de l'image (de la liste dataimage), si l'index i est inférieur au nombre de valeurs dans la liste msg_code, on ajoute à <i>listeimage le pixel de l'image modifiée avec le code du message, sinon, on ajoute simplement le pixel de l'image. On crée une nouvelle image en gardant les dimensions de la précédente et on y place la liste "listeimage". On sauvegarde la nouvelle image (tigreCode.bmp) et on l'affiche.</i></p>
<p>1. Compléter le code suivant :</p>
<p><i>msg = "rdv place du Pantheon a 10h demain matin."</i><br/><i>msg_code = []</i><br/><i>for c in msg:</i><br/><i>    msg_code.append(encode64(c))</i><br/><i>print("message :", msg)</i><br/><i>print("message codé : ", msg_code)</i><br/><i>img = Image.open(image)</i><br/><i>dataimage = img.getdata()</i><br/><i>l, h = img.size</i><br/><i>i = 0</i><br/><i>for pixel in dataimage :</i><br/></p>
<p><i>    # A compléter</i></p>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
