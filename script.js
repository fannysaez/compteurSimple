/**
 * Script de gestion d'un compteur interactif.
 *
 * - Incrémente ou décrémente la valeur du compteur selon les boutons cliqués.
 * - Permet d'ajouter ou de soustraire 1 ou 5 à la valeur actuelle.
 * - Permet de réinitialiser le compteur à zéro.
 *
 * Définitions :
 * - Incrémenter : augmenter la valeur d'une variable, généralement de 1 ou d'une valeur donnée.
 * - Décrémenter : diminuer la valeur d'une variable, généralement de 1 ou d'une valeur donnée.
 * - getElementById : méthode JavaScript qui permet de récupérer un élément HTML à partir de son attribut id.
 * - addEventListener : méthode JavaScript qui permet d'attacher une fonction à exécuter lorsqu'un événement se produit sur un élément.
 * - updateDisplay : fonction personnalisée qui met à jour l'affichage du compteur dans la page HTML.
 * - textContent : propriété qui permet de définir ou d'obtenir le texte contenu dans un élément HTML.
 * - count : variable qui stocke la valeur actuelle du compteur.
 */


let count = 0; // Variable pour stocker la valeur du compteur (initialisée à 0)
const counter = document.querySelector("#counter"); // Récupère l'élément HTML qui affiche le compteur
const counterDiv = document.querySelector('[data-counter]'); // Récupère l'élément HTML qui affiche le compteur

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

