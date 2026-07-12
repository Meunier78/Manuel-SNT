# Traitement des données avec Python

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>Le programme Python que vous allez compléter doit se trouver dans le même dossier que l'image "braccio.png".</p>
<p>La carte Arduino est équipée d'une l’interface de puissance qui permet de fournir le courant nécessaire aux servomoteurs du robot.</p>
<p>1. Complétez le programme suivant afin d’envoyer les différentes valeurs des curseurs à la carte Arduino.<br/></p>
<p><i>from tkinter import Tk, Button, Label, Scale, PhotoImage, Canvas, Frame</i><br/><i>import serial</i><br/><i>try:</i><br/><i>    ser = serial.Serial("COM11", 115200, timeout=1)</i><br/><i>    print(ser)</i><br/><i>    liaison=True</i><br/><i>except:</i><br/><i>    print("Pas de liaison avec la carte Arduino !")</i><br/><i>    liaison=False</i><br/><i># Envoi des caractères sur la liaison série</i><br/><i>def envoyer(datacmd) :</i><br/><i>    try:</i><br/><i>        ser.write((datacmd).encode('utf-8'))</i><br/><i>    except:</i><br/><i>        print("bp d'écriture")</i><br/><i>def bras():</i><br/><i>    b=str(curseur_base.get())</i><br/><i>    data = "B"+b</i><br/><i>    envoyer(data)</i></p>
<p><i>.........</i></p>
<p><i># A compléter !</i></p>
<p><i>..........</i></p>
<p><i>fen = Tk()</i><br/><i>fen.title("Commande du Robot Braccio")</i><br/><i>zone = Frame(fen, width=573, height=569, borderwidth=2, relief='groove', bg='white')</i><br/><i>zone.pack(padx=10, pady=10)</i><br/><i>monimage = PhotoImage(file = "braccio.png")</i><br/><i>canevas = Canvas(zone, width=563, height=559, bg='white')</i><br/><i>canevas.place(x=0,y=0)</i><br/><i>canevas.create_image(0, 0, anchor="nw", image=monimage)</i></p>
<p><i>.........</i></p>
<p><i># A compléter !</i></p>
<p><i>..........</i></p>
<p><i>fen.mainloop()</i><br/><i>if liaison : ser.close()</i><br/></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
