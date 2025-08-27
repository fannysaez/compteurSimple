# Compteur Simple

Ce projet propose un compteur interactif en JavaScript, HTML et CSS. Il permet d'incrémenter, de décrémenter, d'ajouter ou de soustraire 1 ou 5 à la valeur du compteur, ainsi que de le réinitialiser à zéro.

## Fonctionnalités

- **Incrémenter** le compteur de 1 ou 5
- **Décrémenter** le compteur de 1 ou 5
- **Réinitialiser** le compteur à zéro

## Explications du code principal (`script.js`)

```js
let count = 0; // Variable pour stocker la valeur du compteur (initialisée à 0)
const counterDiv = document.querySelector("[data-counter]"); // Récupère l'élément HTML qui affiche le compteur

// Ajoute 1 au compteur quand on clique sur le bouton "plus"
document.querySelector("#plus").addEventListener("click", () => {
  count++; // Incrémente le compteur de 1
  updateDisplay(); // Met à jour l'affichage
});

// Soustrait 1 au compteur quand on clique sur le bouton "moins"
document.querySelector("#moins").addEventListener("click", () => {
  count--; // Décrémente le compteur de 1
  updateDisplay(); // Met à jour l'affichage
});

// Ajoute 5 au compteur quand on clique sur le bouton "plus5"
document.querySelector("#plus5").addEventListener("click", () => {
  count += 5; // Incrémente le compteur de 5
  updateDisplay(); // Met à jour l'affichage
});

// Soustrait 5 au compteur quand on clique sur le bouton "moins5"
document.querySelector("#moins5").addEventListener("click", () => {
  count -= 5; // Décrémente le compteur de 5
  updateDisplay(); // Met à jour l'affichage
});

// Réinitialise le compteur à 0 quand on clique sur le bouton "reset"
document.querySelector("#reset").addEventListener("click", () => {
  count = 0; // Remet le compteur à 0
  updateDisplay(); // Met à jour l'affichage
});

// Fonction pour mettre à jour l'affichage du compteur
function updateDisplay() {
  counterDiv.textContent = "Compteur : " + count; // Affiche le texte souhaité
}
```

## Définitions utiles

- **Incrémenter** : augmenter la valeur d'une variable (ex : +1 ou +5)
- **Décrémenter** : diminuer la valeur d'une variable (ex : -1 ou -5)
- **data-counter** : attribut HTML personnalisé (data attribute) utilisé pour cibler l'élément du compteur dans le DOM. Permet de sélectionner l'élément sans utiliser d'id ou de classe.
- **querySelector('[data-counter]')** : méthode JavaScript pour récupérer un élément HTML par un attribut personnalisé
- **addEventListener** : attache une fonction à un événement (ex : clic sur un bouton)
- **updateDisplay** : fonction qui met à jour l'affichage du compteur
- **textContent** : propriété qui permet de modifier le texte d'un élément HTML
- **count** : variable qui stocke la valeur actuelle du compteur

## Comment utiliser ce compteur ?

1. Ouvrez le fichier `index.html` dans un navigateur web.
2. Cliquez sur les boutons pour modifier la valeur du compteur selon vos besoins.
3. Le compteur s'affiche sous la forme "Compteur : X" et se met à jour instantanément. Le texte "Compteur :" reste toujours visible devant la valeur.

## Exemple d'interface HTML

```html
<div data-counter>Compteur : 0</div>
<button id="plus">+1</button>
<button id="moins">-1</button>
<button id="plus5">+5</button>
<button id="moins5">-5</button>
<button id="reset">Reset</button>
```

## Personnalisation

Vous pouvez modifier les valeurs ajoutées/soustraites ou le style dans `style.css` pour adapter le compteur à vos besoins.
