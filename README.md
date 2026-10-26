# Tiffany’s Coiffure

Nouveau site du salon Tiffany’s (Liège), qui remplace le site Webador www.tiffany-s.be.

## Fichiers

- `index.html` : accueil (philosophie, prestations et tarifs, horaires, contact)
- `prendre-rendez-vous.html` : calendrier de réservation Cal.com intégré
- `mentions-legales.html` : mentions légales, confidentialité et cookies
- `assets/style.css` : styles
- `assets/main.js` : animations au défilement

Le site est en HTML, CSS et JavaScript simples, sans étape de compilation.

## Photos, polices et scripts

Tout est hébergé dans le dossier `assets/` : photos (`assets/images/`), polices
(`assets/fonts/`) et animations GSAP (`assets/js/`). Le site ne dépose aucun cookie.
Seul le calendrier de réservation est chargé depuis un service tiers (Cal.com).

## Mentions légales

La page `mentions-legales.html` contient les mentions légales, la politique de
confidentialité et la politique de cookies.

## Rendez-vous

Tous les boutons « Rendez-vous » mènent à `prendre-rendez-vous.html`, qui intègre
le calendrier de https://cal.com/tiffany-s (code d’intégration en bas de la page).
Les soins, leurs durées et les horaires se règlent directement sur Cal.com.

## Mise en ligne

1. Publier le dossier `Tiffanys-Coiffure` sur Vercel.
2. Relier le domaine `tiffany-s.be` au projet Vercel.
