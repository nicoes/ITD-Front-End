ITD-Front-End
=============

A front-end library of frameworks for ITD projects

----
Dit is een front-end library voor projecten van het ITD team. Deze library maakt gebruik van een set tools die de front-end workflow versneld, vergemakkelijkt en gestructureerd houdt:

- Bootstrap (3.0) (De Sass port van originele bootstrap), http://alademann.github.io/sass-bootstrap/
- RequireJS, een javascript bestand- en modulelader voor een gestructureerd javascript-ecosysteem, http://requirejs.org/docs/jquery.html
- Grunt, Javascript taskrunner/build tool, http://gruntjs.com/

We hebben drie niveaus van directories:

- root, hierin staan alle ongecompileerde bestanden: javascript-bestanden, partial html-bestanden en scss bestanden.
Deze directory is opgezet met de gedachte dat alles gecompileerd wordt in de "/Build"-directory met de tool "Hammer for Mac" (@PeterJagt: Niet een fysieke hamer).

- "/Build", hierin staan development-bestanden die gebruikt kunnen worden door bijv. back-end programmeurs.

- "/Build/dist", hierin staan de bestanden die 100% geoptimaliseerd zijn voor productie. Bekijk Gruntfile.js om te zien wat hier precies in terecht komt.
