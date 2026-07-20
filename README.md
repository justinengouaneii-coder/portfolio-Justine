# Portfolio — Justine Ngouane II Kenfack

Site statique (HTML/CSS/JS, sans framework) prêt à déployer sur Vercel.

## Où modifier quoi

- **Textes** : tout est dans `index.html`. Chaque zone à remplacer est marquée `[PLACEHOLDER — ...]`.
- **Couleurs / typographie** : tout est centralisé dans les variables en haut de `style.css` (section `:root`).
- **Photo et visuels de projets** : à déposer dans `images/` (voir noms de fichiers attendus dans `index.html`).
- **Interactions** (menu mobile, modales projet, formulaire) : `script.js` — pas besoin d'y toucher pour changer le contenu.

## Formulaire de contact — Formspree

Le formulaire utilise [Formspree](https://formspree.io) (gratuit jusqu'à 50 messages/mois, aucun backend requis) :

1. Créez un compte gratuit sur formspree.io.
2. Créez un formulaire, copiez l'URL du type `https://formspree.io/f/xxxxxxx`.
3. Remplacez `VOTRE_ID_FORMSPREE` dans `index.html` (attribut `action` du `<form id="contactForm">`).

## Déploiement sur Vercel

1. Poussez ce dossier `portfolio/` sur un repo GitHub (ou GitLab/Bitbucket).
2. Sur [vercel.com](https://vercel.com), cliquez « Add New Project » → importez le repo.
3. Vercel détecte un site statique automatiquement (aucune commande de build nécessaire).
4. Déployez — le site est en ligne en quelques secondes.

Alternative sans Git : `npx vercel` depuis ce dossier (installation CLI Vercel requise).
