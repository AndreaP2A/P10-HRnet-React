<div align="center">
    <img src="./src/assets/img/wealth_health_logo.png" alt="Logo Wealth Health">
    <h3 align="center">HRnet - Wealth Health HR Internal App</h3>
    <p align="center">HRnet est une application web interne de la firme Wealth Health qui permet la gestion des dossiers des employés. La version d'origine utilisait jQuery pour la totalité des plugins/composants dont l'application avait besoin : il m'a été donné pour tâche de moderniser HRnet en repartant de zéro avec React et de développer moi-même un des quatres plugins existants.</p>
</div>

## Contexte du projet

HRnet est un projet fictif, constituant le 10ème projet pratique dans le cadre du cursus que je suis chez OpenClassrooms. Dans ce cadre, j'ai choisi de développer une fenêtre modale React customisable afin de remplacer l'ancien plugin jQuery.<br />
Ce projet m'a amené à travailler sur :

- La "conversion" d'un plugin jQuery en composant fonctionnel React
- La refonte d'une application pour réduire la dette technique
- La production de documentation technique pour une application React : ce readme and les commmentaires JSDoc dans le code devraient fournir toutes les informations nécessaires.
- La résolution d'un problème ([issue GitHub](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3)) soulevé en interne : production d'un CSS épuré permettant la customisation globale du composant avec exemples
- L'analyse de la performance d'une application web via Lighthouse

## Technologies utilisées

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## modal-window-ap2a

Le composant et package que j'ai choisi de développer en React étant la fenêtre modale, vous pouvez le retrouver sur la [librairie npm](https://www.npmjs.com/package/modal-window-ap2a) et son [repo GitHub](https://github.com/AndreaP2A/P10-HRnet-modal-window-component).

Pour l'installer rapidement, il vous suffira d'ouvrir votre terminal et d'entrer :

```sh
npm install modal-window-ap2a
```

Si vous souhaitez le mettre à jour :

```sh
npm update modal-window-ap2a
```

## Les autres composants React importés

- DataTable : [:atom_symbol: Tanstack Table](https://tanstack.com/table/latest) :arrow_right: remplace l'ancien [plugin de tableau de données](https://github.com/DataTables/DataTables)
- SelectMenu : [:atom_symbol: Radix UI - Select](https://www.radix-ui.com/primitives/docs/components/select) remplace l'ancien [plugin de menu déroulant](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
- DatePicker : [:atom_symbol: React DayPicker](https://daypicker.dev/) :arrow_right: remplace l'ancien [plugin de sélecteur de date](https://github.com/xdan/datetimepicker)

## En tant qu'utilisateur d'HRnet, je dois pouvoir ...

- Renseigner simplement un formulaire de création d'employé moderne et intuitif
- Valider le formulaire en cliquant sur "Save" et avoir une fenêtre modale de confirmation qui s'affiche
- Être redirigé vers la page listant les employés en cliquant sur le lien approprié
- Consulter la liste des employés agencée dans un tableau avec pagination, barre de recherche et filtres

## Site en ligne

A venir !

## Contact

andrea.porche2a@gmail.com

Lien du repo: [https://github.com/AndreaP2A/P10-HRnet-React](https://github.com/AndreaP2A/P10-HRnet-React)
Lien forké du repo de l'application d'origine, utilisant jQuery: [https://github.com/AndreaP2A/P10-HRnet](https://github.com/AndreaP2A/P10-HRnet)
