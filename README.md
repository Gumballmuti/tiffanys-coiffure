# Tiffany’s Coiffure

Nouveau site du salon Tiffany’s (Liège), qui remplace le site Webador www.tiffany-s.be.

## Fichiers

- `index.html` : accueil (philosophie, prestations et tarifs, horaires, contact)
- `mentions-legales.html` : mentions légales, confidentialité et cookies
- `assets/style.css` : styles
- `assets/main.js` : animations au défilement
- `vercel.json` : redirige l’ancienne page `prendre-rendez-vous.html` vers Cal.com

Le site est en HTML, CSS et JavaScript simples, sans étape de compilation.

## Photos, polices et scripts

Tout est hébergé dans le dossier `assets/` : photos (`assets/images/`), polices
(`assets/fonts/`) et animations GSAP (`assets/js/`). Le site ne dépose aucun cookie.
Seule la réservation se fait sur un service tiers (Cal.com).

## Mentions légales

La page `mentions-legales.html` contient les mentions légales, la politique de
confidentialité et la politique de cookies.

## Rendez-vous

Tous les boutons « Rendez-vous » mènent à https://cal.com/tiffany-s.
Les soins, leurs durées et les horaires se règlent directement sur Cal.com.

## Mise en ligne

1. Publier le dossier `Tiffanys-Coiffure` sur Vercel.
2. Relier le domaine `tiffany-s.be` au projet Vercel.
