// Déclaration des variables :

// playerSide :
const inpPlayerTag = document.querySelector("input#playerTag");
const btnPlayerTag = document.querySelector("button#btn-playerTag");

// select theme :
const selectTheme = document.querySelector("select#theme");

// I - function selectTheme()

// a - création des tableaux :

// I - array of animaux : 

const animaux = [
    {
        "name": "autruche",
        "src": './public/images/animaux/autruche.png'
    },
    {
        "name": "boa",
        "src": '/public/images/animaux/boa.png'
    },
    {
        "name": "crocodile",
        "src": './public/images/animaux/crocodile.png'
    },
    {
        "name": "elephant",
        "src": './public/images/animaux/elephant.png'
    },
    {
        "name": "iguane",
        "src": './public/images/animaux/iguane.png'
    },
    {
        "name": "kangourou",
        "src": './public/images/animaux/kangourou.png'
    },
    {
        "name": "koala",
        "src": './public/images/animaux/koala.png'
    },
    {
        "name": "leopard",
        "src": './public/images/animaux/leopard.png'
    },
    {
        "name": "lion",
        "src": './public/images/animaux/lion.png'
    },
    {
        "name": "ours",
        "src": './public/images/animaux/ours.png'
    },
    {
        "name": "panda",
        "src": './public/images/animaux/panda.png'
    },
    {
        "name": "panthere",
        "src": './public/images/animaux/panthere.png'
    },
    {
        "name": "renard",
        "src": './public/images/animaux/renard.png'
    },
    {
        "name": "rhinoceros",
        "src": './public/images/animaux/rhinoceros.png'
    },
    {
        "name": "tigre",
        "src": './public/images/animaux/tigre.png'
    },
    {
        "name": "zebre",
        "src": './public/images/animaux/zebre.png'
    },
]

// array of fruits : 

const fruits = [
    
    {
        "name": "ananas",
        "src": "./public/images/fruits/ananas.png"
    },
    {
        "name": "banane",
        "src": "./public/images/fruits/banane.png"
    },
    {
        "name": "citron",
        "src": "./public/images/fruits/citron.png"
    },
    {
        "name": "fraise",
        "src": "./public/images/fruits/fraise.png"
    },
    {
        "name": "framboise",
        "src": "./public/images/fruits/framboise.png"
    },
    {
        "name": "grenade",
        "src": "./public/images/fruits/grenade.png"
    },
    {
        "name": "kiwi",
        "src": "./public/images/fruits/kiwi.png"
    },
    {
        "name": "mangue",
        "src": "./public/images/fruits/mangue.png"
    },
    {
        "name": "noix-de-coco",
        "src": "./public/images/fruits/noix-de-coco.png"
    },
    {
        "name": "peche",
        "src": "./public/images/fruits/peche.png"
    },
    {
        "name": "poire",
        "src": "./public/images/fruits/poire.png"
    },
    {
        "name": "raisin",
        "src": "./public/images/fruits/raisin.png"
    },
    {
        "name": "vanille",
        "src": "./public/images/fruits/vanille.png"
    },

]


selectTheme.addEventListener("change", (e) =>{
    const theme = e.target.value;

    console.log(theme)
})

// function selectTheme(){

// }

// II - function shuffle()


// - Function createCard()


// III - function isPair()

// IV - function IncrementScore() :

// V - function disabled card() :




/**************************************** */

// features :

// playerTag :


// toggle rules of game :

// toggle footer :