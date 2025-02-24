var speed = 5; // La vitesse du scintillement initialisée à 5

var windowW = window.innerWidth; // Récupère la largeur de la fenêtre
var windowH = window.innerHeight; // Récupère la hauteur de la fenêtre

var nb_stars = Math.floor((windowW * windowH) / 2000); // Calcule le nombre d'étoiles en fonction de la taille de la fenêtre

var background = document.getElementById('background'); // Récupère l'élément avec l'id background

for (var i = 0; i < nb_stars; i++) { // Boucle pour créer les étoiles
    var size = Math.floor((Math.random() * 5)); // Taille de l'étoile
    var animDur = Math.floor((Math.random()*10)+4) / (speed/2); // Durée de l'animation
    var posX = Math.floor((Math.random()*windowW)+1); // Position horizontale
    var posY = Math.floor((Math.random()*windowH)+1); // Position verticale

    var randomAnimDuration = 'animation-duration: ' + animDur + 's;';
    
    var style = 'width: ' + size + 'px; height: ' + size + 'px; left: ' + posX + 'px; top: ' + posY + 'px;' + randomAnimDuration; // Style de l'étoile

    var randomColor = getRandomColor(); // Couleur de l'étoile
    
    // Création de la div étoile et ajout au background
    var star = document.createElement('div');
    star.classList.add('star', randomColor);
    star.style.cssText = style;
    background.appendChild(star);
}

function getRandomColor() { // Fonction pour obtenir une couleur aléatoire
    var colors = ['yellow', 'white', 'blue'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}