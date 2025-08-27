# Compteur Simple

Ce projet propose un compteur interactif en JavaScript, HTML et CSS. Il permet d'incrémenter, de décrémenter, d'ajouter ou de soustraire 1 ou 5 à la valeur du compteur, ainsi que de le réinitialiser à zéro.

## Fonctionnalités

- **Incrémenter** le compteur de 1 ou 5
- **Décrémenter** le compteur de 1 ou 5
- **Réinitialiser** le compteur à zéro

## Explications du code principal (`script.js`)

```js
let count = 0; // Valeur initiale du compteur
const counter = document.getElementById("counter"); // Élément HTML affichant la valeur

// Incrémente de 1
document.getElementById("plus").addEventListener("click", () => {
  count++;
  updateDisplay();
});
// Décrémente de 1
document.getElementById("moins").addEventListener("click", () => {
  count--;
  updateDisplay();
});
// Incrémente de 5
document.getElementById("plus5").addEventListener("click", () => {
  count += 5;
  updateDisplay();
});
// Décrémente de 5
document.getElementById("moins5").addEventListener("click", () => {
  count -= 5;
  updateDisplay();
});
// Réinitialise à 0
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
// Met à jour l'affichage
function updateDisplay() {
  counter.textContent = count;
}
```

## Définitions utiles

- **Incrémenter** : augmenter la valeur d'une variable (ex : +1 ou +5)
- **Décrémenter** : diminuer la valeur d'une variable (ex : -1 ou -5)
- **getElementById** : méthode JavaScript pour récupérer un élément HTML par son id
- **addEventListener** : attache une fonction à un événement (ex : clic sur un bouton)
- **updateDisplay** : fonction qui met à jour l'affichage du compteur
- **textContent** : propriété qui permet de modifier le texte d'un élément HTML
- **count** : variable qui stocke la valeur actuelle du compteur

## Comment utiliser ce compteur ?

1. Ouvrez le fichier `index.html` dans un navigateur web.
2. Cliquez sur les boutons pour modifier la valeur du compteur selon vos besoins.
3. Le compteur s'affiche et se met à jour instantanément.

## Exemple d'interface HTML

```html
<div>
  <span id="counter">0</span>
  <button id="plus">+1</button>
  <button id="moins">-1</button>
  <button id="plus5">+5</button>
  <button id="moins5">-5</button>
  <button id="reset">Reset</button>
</div>
```

## Personnalisation

Vous pouvez modifier les valeurs ajoutées/soustraites ou le style dans `style.css` pour adapter le compteur à vos besoins.
