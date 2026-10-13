# Tiffany’s Coiffure

Nouveau site du salon Tiffany’s (Liège), qui remplace le site Webador www.tiffany-s.be.

## Fichiers

- `index.html` : accueil (philosophie, prestations et tarifs, horaires, contact)
- `prendre-rendez-vous.html` : formulaire de prise de rendez-vous
- `mentions-legales.html` : mentions légales, confidentialité et cookies
- `assets/style.css` : styles
- `assets/main.js` : animations au défilement et formulaire

Le site est en HTML, CSS et JavaScript simples, sans étape de compilation.

## Photos, polices et scripts

Tout est hébergé dans le dossier `assets/` : photos (`assets/images/`), polices
(`assets/fonts/`) et animations GSAP (`assets/js/`). Le site ne fait appel à aucun
service tiers et ne dépose aucun cookie.

## Mentions légales

La page `mentions-legales.html` contient les mentions légales, la politique de
confidentialité et la politique de cookies. Les champs surlignés « À compléter »
(exploitant, e-mail, numéro BCE, TVA) doivent être remplis avant la mise en ligne.

## Formulaire de rendez-vous

Le formulaire est prévu pour **Netlify Forms** (attribut `data-netlify="true"`).
Une fois le site publié sur Netlify, les demandes apparaissent dans
l’onglet « Forms » du projet Netlify, et une notification par e-mail peut être activée.
Sur un autre hébergeur, il faut brancher un autre service d’envoi
(par exemple Formspree) dans `assets/main.js`.

## Mise en ligne

1. Publier le dossier `Tiffanys-Coiffure` sur Netlify (glisser-déposer ou lien GitHub).
2. Relier le domaine `tiffany-s.be` au projet Netlify.
