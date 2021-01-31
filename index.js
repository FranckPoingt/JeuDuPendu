// Boutons & liens HTML
var play = document.getElementById('play');
var motVide = document.getElementById('mot-vide');
var tentatives = document.getElementById('tentatives');
var motRecherche = document.getElementById('mot-recherche');
var lettreSoumise = document.getElementById('lettres');
var valider = document.getElementById('submit');
var resultat = document.getElementById('resultat');
var gifValue = document.getElementById('gif-win');
var gifvalueLose = document.getElementById('gif-lose');
// Jeu 
// Déclaration des mots 
var mots = ['multiplexasses', 'administration', 'soumissionniez', 'manifestations', 'constiperaient', 'antialcoolisme', 'standardiserez', 'endoctrineront', 'fonctionnaires'];

// Choix aléatoire du mot 
var motATrouver = mots[Math.floor(Math.random() * mots.length)+1];

//Variables du jeu
var essais;
var isWin = false;
var lettreValide;
var jeu = [];
document.getElementById('gif-win').hidden = true;
document.getElementById('gif-lose').hidden = true;
//Generation du mot vide
function start(){
  jeu = [];
  motATrouver;
  for (var i = 0; i<motATrouver.length; i++) {
    jeu[i] = '_';
    
  }
  essais = 9;
  document.getElementById('submit').disabled = false;
  affichage();
}
//Refresh variables
function affichage(){
  motVide.innerHTML = jeu;
  tentatives.innerHTML = "Il vous reste " + essais + " essais";

  if (essais === 1) {
    tentatives.style.color = "red";
  }
}
//Jeu
function jouer(){
  lettre = document.getElementById('lettres').value;
  var index = motATrouver.indexOf(lettre);

  if (index == -1) {
    essais--;
    affichage();
  } 
  else {
    index = motATrouver.indexOf(lettre);
    while(index >= 0){
      var test = index;
      index = motATrouver.indexOf(lettre, index+1);
      jeu[test] = lettre;
      affichage();
    }
  }
  isWinTest();
}

//Test victoire
function isWinTest(){
  lettreValide = 0;
  for (var i = 0; i < motATrouver.length; i++){
    if(jeu[i] != '_'){
      lettreValide++;
    }
    if (lettreValide == motATrouver.length){
      isWin = true;
      end();
    }
  }
  if (essais == 0) {
    end();
  }
}

// Affichage résultats
function end(){
  if (isWin == true) {
    resultat.innerHTML = "Bravo vous avez gagné !";
    document.getElementById('gif-win').hidden = false;
  }
  else {
    resultat.innerHTML = "Game Over";
    motRecherche.innerHTML = "Le mot à trouver était : " + motATrouver;
    document.getElementById('gif-lose').hidden = false;
  }
}

// interaction buttons
play.addEventListener('click', start, false);
valider.addEventListener('click', jouer, false);