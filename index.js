// déclaration des variables générales :
const infoParty = document.querySelector(".info-party")

// I - function loaderTheme()

// a - arrays :

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

// I - selectedTheme(): 

const selectTheme = document.querySelector("select#theme");

selectTheme.addEventListener('change', (e) => {
    var selectedTheme = selectTheme.value;

    if(selectTheme.value == "animaux"){
        infoParty.innerHTML = (`🐯 Le thème choissi est les  ${selectedTheme} 🐯`)
    }else if(selectTheme.value == "fruits"){
        infoParty.innerHTML = (`🍓 Le thème choissi est les ${selectedTheme} 🥝`)
    }else if(selectTheme.value == "default"){
        selectedTheme = null;
    }
    
    loadingTheme()
})

function loadingTheme() {

    let card;

    if(selectTheme.value == "animaux"){
        card = animaux;
        console.log(`Tableau des ${card} animaux`)
    }else if(selectTheme.value == "fruits"){
        card = fruits;
        console.log(`Tableau des ${card} fruits`)
    }


}


// II - function shuffle()


// - function createCard()


// III - function isPair()

// IV - function IncrementScore() :

// V - function disabled card() :




/**************************************** */

// features :

// playerTag :
const playerTag = document.querySelector("h2.pseudo")
const inpPlayerTag = document.querySelector("input#playerTag");


const btnPlayerTag = document.querySelector("button#btn-playerTag");

btnPlayerTag.addEventListener("click", (e) => {

    checkPlayerTag()

})


function checkPlayerTag() {

    const regExp = /[0-9 a-z]{2,}/gi;

    if (inpPlayerTag.match(regExp)) {

        const pseudo = inpPlayerTag.selectedTheme;

        return playerTag.innerHTML = `Bienvenue ${pseudo.charAt(0).toUpperCase()}${pseudo.slice(1)}`

    } else if (inpPlayerTag.selectedTheme !== (regExp)) {
        alert(`Saisie invalide, veuillez saisir un pseudo comprenant 2 caractères alphanumériques minimum`)
    }
}

// toggle rules of game :

// toggle footer :