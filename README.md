# App de radios sans pubs (PWA)

Cette application propose une interface sans publicité pour écouter des radios en ligne. Les flux diffusés peuvent toutefois contenir des publicités intégrées par les radios elles-mêmes.

## Fonctionnalités principales
- Interface sans publicité ajoutée par l'application
- Écoute de radios en ligne
- Installation sur mobile ou desktop (PWA)
- Fonctionne hors-ligne (page dédiée)
- Interface légère et rapide

## Installation et lancement

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd radios
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Lancer en développement**
   ```bash
   npm run dev
   ```
4. **Construire pour la production**
   ```bash
   npm run build
   ```
5. **Prévisualiser le build**
   ```bash
   npm run preview
   ```

## Fonctionnement PWA
- Un manifest et un service worker sont inclus pour permettre l'installation sur l'écran d'accueil et l'utilisation hors-ligne.
- Une page `offline.html` s'affiche automatiquement si l'utilisateur perd la connexion.
- Les icônes PWA sont à placer dans `public/icons/` (voir manifest.webmanifest).

## Personnalisation
- Modifiez le contenu de `src/` pour adapter l'application à vos besoins.
- Adaptez les icônes et le nom de l'app dans `public/manifest.webmanifest`.
- Le service worker (`public/sw.js`) peut être enrichi pour gérer d'autres stratégies de cache.

## Déploiement
Déployez le contenu du dossier `dist/` sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, etc.).

## Licence
Projet open-source, à adapter et réutiliser librement.
