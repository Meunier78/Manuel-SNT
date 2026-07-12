# Les liens dans Game of Thrones - Graphe

<div class="imported-content">

<div class="card">




<div><a class="relative-url" href="https://predictivehacks.com/social-network-analysis-of-game-of-thrones/" rel="noopener" target="_blank"><p><img class="ptSynthesisImg imported-image" data-original-url="media%2FpearlContent%2F551774949" id="l_2418463" loading="lazy" pearltrees="true" src="/Manuel-SNT/assets/imported/les-reseaux-sociaux-activites-graphes-pour-reseaux-sociaux-les-liens-dans-game-of-thrones-graphe-html/image-01.jpg" width="1000"/></p></a></div>
<p>This is a quick tutorial about <a href="https://en.wikipedia.org/wiki/Social_network_analysis" rel="noopener" target="_blank">Social Network Analysis</a> using <a href="https://networkx.github.io/documentation/stable/" rel="noopener" target="_blank">Networkx</a> taking as examples the characters of Game of Thrones. We got the data from the <a href="https://github.com/mathbeveridge/asoiaf" rel="noopener" target="_blank">github</a> merging all the 5 books and ignoring the “weight” attribute.</p>
<h3>Social Network Analysis</h3>
<p>With <a href="https://en.wikipedia.org/wiki/Network_science" rel="noopener" target="_blank">Network Science</a> we can approach many problems. Almost everything could be translated to a “Network” with Nodes and Edges. For example, the Google Maps is a network where the Nodes could be the “Places” and Edges can be the “Streets”. Of course the most famous network is the <b>Facebook </b>which is an “undirected” graph and the <b>Instagram </b>which is “directed” since we have the people that we follow and our followers. The nodes are the “users” and the “edges” are the connections between them. Notice that both “nodes” and “edges” can have attributes. For example, node attributes in Facebook can be the “Gender”, “Location”, “Age” etc and edge attribute can be “date of last conversation between two nodes”, ‘number of likes”, “date they connected” etc.</p>
<p>Notice that with Network Analysis we can apply recommendation systems but this is out of the scope of this tutorial.</p>
<h3>Game of Thrones in NetworkX</h3>
<p>We will use the NetworkX python library on “Game of Thrones” data. The first exercise is to load the data and to get the number of nodes of the network which is <b>796</b> and the number of edges which is <b>2823</b>. Thus, we are dealing with 796 characters of Game of Thrones.</p>
<p>We will return some of the main Network properties such as “<b>average shortest path length</b>“, “<b>diameter</b>“, “<b>density</b>“, “<b>average clustering</b>” and “<b>transitivity</b>“. We commend out the answers of each property.</p>
<p>As we will see the “<b>diameter</b>” of our graph is 9, which is the longest of all the calculated shortest paths in a network. It is the shortest distance between the two most distant nodes in the network. In other words, once the shortest path length from every node to all other nodes is calculated, the diameter is the longest of all the calculated path lengths. The diameter is representative of the linear size of a network.</p>
<p>Also the “<b>average shortest path length</b>” is 3.41 which is calculated by finding the shortest path between all pairs of nodes, and taking the average over all paths of the length thereof. This shows us, on average, the number of steps it takes to get from one member of the network to another</p>
<h3>Centrality Measures</h3>
<p>We are going to represent some Centrality measures. We give the definition of the most common:</p>
<p><ul><li><b>Degree centrality</b> of a node in a network is the number of links (vertices) incident on the node.</li><li><b>Closeness centrality</b> determines how “close” a node is to other nodes in a network by measuring the sum of the shortest distances (geodesic paths) between that node and all other nodes in the network.</li><li><b>Betweenness centrality</b> determines the relative importance of a node by measuring the amount of traffic flowing through that node to other nodes in the network. This is done by measuring the fraction of paths connecting all pairs of nodes and containing the node of interest. Group Betweenness centrality measures the amount of traffic flowing through a group of nodes.</li></ul></p>
<p>We will return also the famous <a href="https://en.wikipedia.org/wiki/PageRank" rel="noopener" target="_blank">PageRank</a> although it is most common in “directed” graphs.</p>
<p>Based on this centrality measures, we will define the <b>5 more important characters in Game of Thrones</b>.</p>
<p>[('Jon-Snow', 0.19211961968354493), ('Tyrion-Lannister', 0.16219109611159815), ('Daenerys-Targaryen', 0.11841801916269228), ('Theon-Greyjoy', 0.11128331813470259), ('Stannis-Baratheon', 0.11013955266679568)]</p>
<p>[('Tyrion-Lannister', 0.15345911949685534), ('Jon-Snow', 0.14339622641509434), ('Jaime-Lannister', 0.1270440251572327), ('Cersei-Lannister', 0.1220125786163522), ('Stannis-Baratheon', 0.11194968553459118)]</p>
<p>[('Jon-Snow', 0.01899956924856684), ('Tyrion-Lannister', 0.018341232619311032), ('Jaime-Lannister', 0.015437447356269757), ('Stannis-Baratheon', 0.013648810781186758), ('Arya-Stark', 0.013432050115231265)]</p>
<p>[('Tyrion-Lannister', 0.4763331336129419), ('Robert-Baratheon', 0.4592720970537262), ('Eddard-Stark', 0.455848623853211), ('Cersei-Lannister', 0.45454545454545453), ('Jaime-Lannister', 0.4519613416714042)]</p>
<p>As we can see, for different Centrality measures, we get different results, for instance, “Jon-Snow” has the highest ” <b>Betweenness</b>” and “Tyrion-Lannister” the highest “<b>Closeness</b>” centrality.</p>
<h3>Cliques</h3>
<p>We will represent how we can get all the <a href="https://en.wikipedia.org/wiki/Clique_(graph_theory)" rel="noopener" target="_blank">Cliques </a>using NetworkX and we will show the largest one.</p>
<p>['Tyrion-Lannister', 'Cersei-Lannister', 'Joffrey-Baratheon', 'Sansa-Stark', 'Jaime-Lannister', 'Robert-Baratheon', 'Eddard-Stark', 'Petyr-Baelish', 'Renly-Baratheon', 'Varys', 'Stannis-Baratheon', 'Tywin-Lannister', 'Catelyn-Stark', 'Robb-Stark']</p>
<h3>Recommendations</h3>
<p>You noticed that Facebook suggests you friends. There are many algorithms, but one of these is based on the “<a href="https://en.wikipedia.org/wiki/Triadic_closure" rel="noopener" target="_blank">Open Triangles</a>” which is a concept in <a href="https://en.wikipedia.org/wiki/Social_network" rel="noopener" target="_blank">social network</a> theory. Triadic closure is the property among three nodes A, B, and C, such that if a strong tie exists between A-B and A-C, there is a weak or strong tie between B-C. This property is too extreme to hold true across very large, complex networks, but it is a useful simplification of reality that can be used to understand and predict networks.</p>
<p>Let’s try to make the top ten suggestions based on the “Open Triangles”</p>
<p>[('Catelyn-Stark', 'Tommen-Baratheon'), ('Eddard-Stark', 'Brienne-of-Tarth'), ('Petyr-Baelish', 'Brienne-of-Tarth'), ('Rodrik-Cassel', 'Stannis-Baratheon'), ('Arya-Stark', 'Brienne-of-Tarth'), ('Arya-Stark', 'Stannis-Baratheon'), ('Bran-Stark', 'Jaime-Lannister'), ('Bran-Stark', 'Stannis-Baratheon')]</p>
<p>So for example we suggest connecting <b>‘Catelyn-Stark’</b> with <b>‘Tommen-Baratheon’</b> etc!</p>

</div>

</div>

<div class="source-note" markdown="1">

Source : **Les Manuels Libres — SNT Seconde**  
Licence : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr),
sous réserve des droits de propriété intellectuelle de tiers.

</div>
