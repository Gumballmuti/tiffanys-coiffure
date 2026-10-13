# Tiffany’s Coiffure

Nouveau site du salon Tiffany’s (Liège), qui remplace le site Webador www.tiffany-s.be.

## Fichiers

- `index.html` : accueil (philosophie, prestations et tarifs, horaires, avis, contact)
- `prendre-rendez-vous.html` : formulaire de prise de rendez-vous
- `assets/style.css` : styles
- `assets/main.js` : animations au défilement (GSAP) et formulaire

Le site est en HTML, CSS et JavaScript simples, sans étape de compilation.

## Photos

Les photos sont encore chargées depuis l’hébergement Webador (`primary.jwwb.nl`).
Avant de résilier Webador, il faut télécharger les photos dans un dossier
`assets/images/` et remplacer les adresses dans les deux pages HTML.

## Formulaire de rendez-vous

Le formulaire est prévu pour **Netlify Forms** (attribut `data-netlify="true"`).
Une fois le site publié sur Netlify, les demandes apparaissent dans
l’onglet « Forms » du projet Netlify, et une notification par e-mail peut être activée.
Sur un autre hébergeur, il faut brancher un autre service d’envoi
(par exemple Formspree) dans `assets/main.js`.

## Mise en ligne

1. Publier le dossier `Tiffanys-Coiffure` sur Netlify (glisser-déposer ou lien GitHub).
2. Relier le domaine `tiffany-s.be` au projet Netlify.
