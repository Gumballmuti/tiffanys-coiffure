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
confidentialité et la politique de cookies.

## Formulaire de rendez-vous

Le site est hébergé sur Vercel, qui ne traite pas les formulaires lui-même.
Il faut brancher un service d’envoi (par exemple Formspree ou Web3Forms)
dans `assets/main.js` pour que les demandes arrivent dans la boîte mail du salon.
En attendant, un envoi affiche un message invitant à appeler le 0492 79 49 39.

## Mise en ligne

1. Publier le dossier `Tiffanys-Coiffure` sur Vercel.
2. Relier le domaine `tiffany-s.be` au projet Vercel.
