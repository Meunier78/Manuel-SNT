# Préparation

<div class="imported-content">

<div class="card">




<p class="scrap-without-first-image"></p><div id="note-text"><p>L’objectif est de commander l’angle de rotation d’un servomoteur par le biais d’une interface homme-machine (IHM) comportant un curseur de réglage et un bouton poussoir d’envoi de la valeur réglée.</p>
<p>On utilise la bibliothèque « Serial » pour communiquer avec la carte Arduino, par l'intermédiaire des méthodes suivantes :</p>
<ul><li>ser = serial.Serial("COMx",115200,timeout=1) permet d'initialiser la liaison série à 115200 bauds sur le COMx (x : numéro du port de communication utilisé par la carte Arduino).</li><li>ser.write("message".encode('utf-8')) permet d'écrire le texte "message".</li></ul><p>Le programme suivant permet de réaliser la commande du servomoteur de la base du robot par une IHM Tkinter :</p>
<p><i>from tkinter import Tk, Button, Label, Scale</i><br/><i>import serial</i><br/><i># Ouverture de la liaison série</i><br/><i>try:</i><br/><i>    ser = serial.Serial("COM8", 115200, timeout=1) # A modifier !</i><br/><i>    print(ser)</i><br/><i>    liaison=True</i><br/><i>except:</i><br/><i>    print("Pas de liaison avec la carte Arduino !")</i><br/><i>    liaison=False</i><br/><i># Envoi des caractères sur la liaison série</i><br/><i>def envoyer(datacmd) :</i><br/><i>    try:</i><br/><i>        ser.write((datacmd).encode('utf-8'))</i><br/><i>    except:</i><br/><i>        print("bp d'écriture")</i><br/><i>def servomot():</i><br/><i>    b=str(curseur_base.get())</i><br/><i>    data = "B"+b</i><br/><i>    envoyer(data)</i><br/><i># L'IHM</i><br/><i>fen = Tk()</i><br/><i>fen.geometry("500x200")</i><br/><i>fen.title("Commande du servomoteur")</i><br/><i>label = Label(fen, text="Commande du servomoteur",fg="blue",font=("Arial", 22, "bold", "italic"))</i><br/><i>label.place(x=50, y=10)</i><br/><i>curseur_base = Scale(fen, orient='horizontal', from_=0, to=180, length=200)</i><br/><i>curseur_base.place(x=145, y=50)</i><br/><i>curseur_base.set(90)</i><br/><i>bouton = Button(fen, text="envoyer", command=servomot)</i><br/><i>bouton.place(x=220, y=100)</i><br/><i>fen.mainloop()</i><br/><i>if liaison : ser.close()</i></p>
<p><br/></p>
</div>
</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
