/***************/
/* DECLARATION */
/***************/

/* RECUPEREZ LE CANVAS */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* Mettre les variables ici */


/**************/
/* INITIALIZE */
/**************/

/* Mettre les fonctions d'initialisation ici */

/**********/
/* UPDATE */
/**********/

/* Mettre les fonctions d'update ici */

/*******************/
/* CHECK COLLISION */
/*******************/

/* Mettre les fonctions de vérification des collisions ici */


/**********/
/* RENDER */
/**********/

/* Mettre les fonctions de dessin (draw) ici */


/*****************/
/* BOUCLE DE JEU */
/*****************/

// INITIALIZE
function initialize() {
  /* Mettre les initialisations ici */
}

// UPDATE
function update() {
  /* Mettre les updates ici */
}

// RENDER
function render() {

    /* Mettre les draw ici */

}

// GAMELOOP
function gameLoop() {
  stopLoop = window.requestAnimationFrame(gameLoop);
  update();
  render();
}

/*************/
/* DEMARRAGE */
/*************/

// APPEL DE INITIALIZE
initialize();

// APPEL DE GAMELOO
gameLoop();
