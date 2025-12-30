<div align="center">
    <img src="./src/assets/img/wealth_health_logo.png" alt="Logo Wealth Health" width="120">
    <h1 align="center">HRnet — Application de Gestion RH</h1>
    <p align="center">
        <strong>Refonte moderne d'une application interne : Transition de jQuery vers React</strong>
    </p>

    <p align="center">
        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
        <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
        <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
        <img src="https://img.shields.io/badge/TanStack%20Table-FF4154?style=for-the-badge&logo=react-table&logoColor=white" alt="TanStack Table" />
        <img src="https://img.shields.io/badge/Radix%20UI-121212?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    </p>
</div>

---

**HRnet** est l'application interne de gestion des ressources humaines de **Wealth Health**, une grande entreprise financière. Ce projet marque la transition d'une architecture héritée sous jQuery vers un écosystème moderne basé sur React, visant à éliminer la dette technique et à améliorer la réutilisabilité des composants.

📌 Présentation du Projet
L'enjeu de cette refonte était de reconstruire entièrement l'application tout en conservant ses fonctionnalités critiques. Un aspect central du projet a consisté à isoler l'un des quatre plugins jQuery d'origine pour le transformer en un **composant React autonome**, publié ultérieurement sous forme de package **npm**.

Cette modernisation permet non seulement une meilleure maintenance du code, mais aussi une optimisation significative des performances, validée par des analyses comparatives via **Lighthouse**.

🎯 Objectifs techniques
- **Migration Architecturelle** : Passage d'un flux impératif (jQuery) à un flux déclaratif (React).
- **Développement de Librairie** : Création, documentation et publication du package `modal-window-ap2a` sur le registre npm.
- **Gestion de Données** : Mise en place d'un système de gestion d'état robuste pour l'enregistrement et la consultation des employés.
- **Modularité & Accessibilité** : Utilisation de primitives Radix UI et de solutions de gestion de tableaux complexes comme TanStack Table.

✨ Fonctionnalités clés
📊 **Tableau de Données Interactif**
Intégration de **TanStack Table** pour une gestion fluide des listes d'employés : recherche globale, tri multi-colonnes et pagination optimisée.

⚡ **Composant npm Propriétaire**
Utilisation de `modal-window-ap2a`, une fenêtre modale personnalisée développée spécifiquement pour ce projet et importée comme dépendance externe.

📅 **Saisie de Données Moderne**
Remplacement des widgets jQuery UI par des composants React performants :
- **DatePicker** : `react-day-picker` pour une sélection de dates intuitive.
- **SelectMenu** : `radix-ui/react-select` pour des menus déroulants accessibles et stylisés.

🚀 **Performance Optimisée**
Gain notable de rapidité et de réactivité grâce à l'utilisation de **Vite** pour le build et une architecture de composants optimisée.

🚀 Installation et Utilisation

### Prérequis
- **NodeJS** (Version 18.x ou supérieure recommandée)
- **NPM**

### Étape 1 : Cloner le projet
```sh
git clone https://github.com/AndreaP2A/P10-HRnet-React.git
cd P10-HRnet-React
```

### Étape 2 : Installer les dépendances
```sh
npm install
```

### Étape 3 : Lancer l'application
```sh
npm run dev
```
L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

💡 **Astuce** : Pour en savoir plus sur la librairie de modale utilisée, consultez la documentation officielle sur [npm: modal-window-ap2a](https://www.npmjs.com/package/modal-window-ap2a).

🛠️ Structure du Projet
```text
.
├── src/
│   ├── assets/         # Images, icônes et styles globaux
│   ├── components/     # Composants UI (Table, Form, Select, etc.)
│   ├── data/           # Données simulées et constantes applicatives
│   ├── pages/          # Vues principales (Home, Employee List)
│   ├── routes/         # Configuration de la navigation avec React Router
│   ├── services/       # Services API et logique métier
│   ├── App.jsx         # Composant racine
│   └── main.jsx        # Point d'entrée de l'application
├── package.json        # Dépendances et scripts de build
└── README.md           # Documentation principale
```

🎓 Contexte Pédagogique
Ce projet est le **10ème projet pratique** du parcours **Développeur d'application JavaScript / React** chez **OpenClassrooms**. Il m'a permis de maîtriser la transformation de plugins legacy en bibliothèques modernes et de renforcer mes compétences en architecture logicielle pour le développement de composants réutilisables.

👨‍💻 Auteur
**Andréa PORCHE**

- GitHub : [@AndreaP2A](https://github.com/AndreaP2A)
- LinkedIn : [Andrea Porche](https://www.linkedin.com/in/andrea-porche-a0b4b12b5/)
- Email : andrea.porche2a@gmail.com
