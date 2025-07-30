# App de radios sans pubs (PWA)

Cette application propose une interface sans publicité pour écouter des radios en ligne. Les flux diffusés peuvent toutefois contenir des publicités intégrées par les radios elles-mêmes.

## Fonctionnalités principales
- Interface sans publicité ajoutée par l'application
- Écoute de radios en ligne (choix de la qualité 128kbits/s ou 192kbits/s)
- Installation sur mobile ou desktop (PWA)
- Fonctionne hors-ligne (page dédiée)
- Interface légère et rapide basée sur React 19 et Vite
- Player audio moderne via `player.style`

## Structure du projet

```
radios/
├── public/
│   ├── manifest.webmanifest
│   ├── sw.js
│   ├── offline.html
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── pwa-512x512-maskable.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── ...
```

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
- Les icônes PWA sont à placer dans `public/` (voir `manifest.webmanifest` et `vite.config.js`).
- Le service worker met en cache les fichiers essentiels et sert une page hors-ligne en cas de coupure réseau.

## Personnalisation
- Modifiez le contenu de `src/` pour adapter l'application à vos besoins (ex : changer les flux radios dans `App.jsx`).
- Adaptez les icônes et le nom de l'app dans `public/manifest.webmanifest` et dans la config Vite (`vite.config.js`).
- Le service worker (`public/sw.js`) peut être enrichi pour gérer d'autres stratégies de cache.
- Les styles globaux sont dans `src/index.css` (support du dark mode via `color-scheme`).

## Dépendances principales
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [player.style](https://www.npmjs.com/package/player.style) (player audio moderne)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (intégration PWA)

## Déploiement
Déployez le contenu du dossier `dist/` sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, etc.).

## Licence
Projet open-source, à adapter et réutiliser librement.
