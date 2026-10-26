(function () {
  "use strict";

  var reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var doc = document.documentElement;

  /* ---------- En-tête : fond au défilement, masqué en descendant ---------- */
  var entete = document.getElementById("entete");
  var dernierY = window.scrollY;
  function majEntete() {
    var y = window.scrollY;
    if (!entete) return;
    entete.classList.toggle("est-plein", y > 30);
    var menuOuvert = doc.classList.contains("menu-ouvert");
    entete.classList.toggle("est-cache", !menuOuvert && y > 420 && y > dernierY + 2);
    if (y < dernierY - 2) entete.classList.remove("est-cache");
    dernierY = y;
  }
  window.addEventListener("scroll", majEntete, { passive: true });
  majEntete();

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu-mobile");
  function basculerMenu(ouvrir) {
    doc.classList.toggle("menu-ouvert", ouvrir);
    burger.setAttribute("aria-expanded", String(ouvrir));
    burger.setAttribute("aria-label", ouvrir ? "Fermer le menu" : "Ouvrir le menu");
    document.body.style.overflow = ouvrir ? "hidden" : "";
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      basculerMenu(!doc.classList.contains("menu-ouvert"));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) basculerMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && doc.classList.contains("menu-ouvert")) basculerMenu(false);
    });
  }

  /* ---------- Bandeau défilant (accélère avec le défilement) ---------- */
  var piste = document.getElementById("bandeau");
  if (piste && !reduit) {
    var x = 0, vitesse = 0.45, boost = 0, sens = -1, precedent = window.scrollY;
    window.addEventListener("scroll", function () {
      var d = window.scrollY - precedent;
      precedent = window.scrollY;
      if (d !== 0) sens = d > 0 ? -1 : 1;
      boost = Math.min(Math.abs(d) * 0.35, 14);
    }, { passive: true });
    (function boucle() {
      var largeur = piste.scrollWidth / 2;
      x += sens * (vitesse + boost);
      boost *= 0.92;
      if (x <= -largeur) x += largeur;
      if (x > 0) x -= largeur;
      piste.style.transform = "translate3d(" + x + "px,0,0)";
      requestAnimationFrame(boucle);
    })();
  }

  /* ---------- Animations GSAP ---------- */
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  if (gsap && ST && !reduit) {
    gsap.registerPlugin(ST);
    var ease = "expo.out";

    // Ouverture : le logo s'écrit de gauche à droite, la photo se dévoile.
    var intro = gsap.timeline({ defaults: { ease: ease } });
    var logoHeros = document.querySelector(".heros__nom .logo");
    var cadreHeros = document.getElementById("heros-cadre");
    if (cadreHeros) {
      intro.fromTo(cadreHeros, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" }, 0)
           .from(cadreHeros.querySelector("img"), { scale: 1.35, duration: 2.2 }, 0);
    }
    if (logoHeros) {
      intro.fromTo(logoHeros, { clipPath: "inset(-10% 100% -10% 0%)" }, { clipPath: "inset(-10% 0% -10% 0%)", duration: 2.1, ease: "power2.inOut" }, 0.35);
    }
    intro.from("[data-intro-filet]", { scaleX: 0, duration: 1.4 }, 1.2)
         .from("[data-intro]", { y: 28, opacity: 0, duration: 1.2, stagger: 0.12 }, 0.9)
         .from(".entete__inner", { y: -24, opacity: 0, duration: 1.2, clearProps: "transform,opacity" }, 0.6)
         .from(".heros__legende, .defiler", { opacity: 0, duration: 1.2 }, 1.6);

    // Parallaxe de la photo du héros
    if (cadreHeros) {
      gsap.to(cadreHeros.querySelector("img"), {
        yPercent: -12, ease: "none",
        scrollTrigger: { trigger: ".heros", start: "top top", end: "bottom top", scrub: true }
      });
    }

    // Titres : chaque ligne monte depuis un masque
    gsap.utils.toArray('[data-reveal="titre"]').forEach(function (titre) {
      gsap.from(titre.querySelectorAll(".ligne > span"), {
        yPercent: 110, duration: 1.4, ease: ease, stagger: 0.12,
        scrollTrigger: { trigger: titre, start: "top 88%" }
      });
    });

    // Textes et blocs : fondu vers le haut
    gsap.utils.toArray('[data-reveal="fade"]').forEach(function (el) {
      gsap.from(el, {
        y: 36, opacity: 0, duration: 1.3, ease: ease,
        scrollTrigger: { trigger: el, start: "top 90%" }
      });
    });

    // Images : rideau qui se lève + léger dézoom
    gsap.utils.toArray('[data-reveal="image"]').forEach(function (cadre) {
      var img = cadre.querySelector("img");
      var tl = gsap.timeline({ scrollTrigger: { trigger: cadre, start: "top 85%" } });
      tl.fromTo(cadre, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" });
      if (img) tl.from(img, { scale: 1.3, duration: 2, ease: ease }, 0);
    });

    // Parallaxe douce dans les cadres
    gsap.utils.toArray("[data-parallax]").forEach(function (img) {
      gsap.fromTo(img, { yPercent: -8 }, {
        yPercent: 0, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    // Carte des prix : les lignes arrivent une à une
    var carte = document.getElementById("carte");
    if (carte) {
      gsap.from(carte.children, {
        x: -24, opacity: 0, duration: 1, ease: ease, stagger: 0.07,
        scrollTrigger: { trigger: carte, start: "top 80%" }
      });
    }

    // Grande devise en filigrane qui glisse avec le défilement
    var geant = document.getElementById("geant");
    if (geant) {
      gsap.fromTo(geant, { xPercent: 0 }, {
        xPercent: -35, ease: "none",
        scrollTrigger: { trigger: geant.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    }

    // Pastille « Sur rendez-vous » : léger décalage au défilement
    var pastille = document.querySelector(".philo__pastille");
    if (pastille) {
      gsap.fromTo(pastille, { y: 60 }, {
        y: -30, ease: "none",
        scrollTrigger: { trigger: pastille.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    }

    window.addEventListener("load", function () { ST.refresh(); });
  }
})();
