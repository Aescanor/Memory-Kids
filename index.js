// computer:
const computerScore = document.querySelector(".computer-score");

// general:
const infoParty = document.querySelector(".info-party");

// gaming board :
const gamingBoard = document.querySelector(".gaming-board");

// cards 
// change of color when the computer or the player wins the card :
const card = document.querySelectorAll(".flip-card")[0];

// for random images :
const cardImage = document.querySelectorAll(".flip-card-back");


// player side:
// playerTag: 
const pseudo = document.querySelector(".pseudo");
const inpPlayerTag = document.querySelector("input.playerTag");
const btnPlayerTag = document.querySelector(".btn-playerTag");
// score:
const playerScore = document.querySelector("span.player-score");

// // I - array of images : 

const animaux = [
 './public/images/autruche.png', './public/images/autruche.png',
 '/public/images/boa.png', '/public/images/boa.png',
 './public/images/crocodile.png', './public/images/crocodile.png',
 './public/images/elephant.png', './public/images/elephant.png',
 './public/images/iguane.png', './public/images/iguane.png',
 './public/images/kangourou.png', './public/images/kangourou.png',
 './public/images/koala.png', './public/images/koala.png',
 './public/images/leopard.png', './public/images/leopard.png',
 './public/images/lion.png', './public/images/lion.png',
 './public/images/ours.png', './public/images/ours.png',
 './public/images/panda.png', './public/images/panda.png',
 './public/images/panthere.png', './public/images/panthere.png',
 './public/images/renard.png', './public/images/renard.png',
 './public/images/rhinoceros.png', './public/images/rhinoceros.png',
 './public/images/tigre.png', './public/images/tigre.png',
 './public/images/zebre.png', './public/images/zebre.png',
]

// TEST /
const backCard = document.querySelector(".flip-card-back")

backCard.innerHTML = `<img src="${animaux[0]}" alt="fruit">`


// II - Function Shuffle :



// // III - Selected Card :



// // IV - Timer ? :


// // V - Function WinnerIs :


// // features: 

// // PlayerTag : 



