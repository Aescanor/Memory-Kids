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

// I - selectTheme(): 

const selectTheme = document.querySelector("select#theme");

selectTheme.addEventListener('change', (e) => {

    selectedTheme()

    loadingTheme()
})

// function selectedTheme :
function selectedTheme() {

    let selectedTheme = selectTheme.value;

    if (selectTheme.value == "animaux") {
        infoParty.innerHTML = (`🐯 Le thème choissi est les  ${selectedTheme} 🐯`)
    } else if (selectTheme.value == "fruits") {
        infoParty.innerHTML = (`🍓 Le thème choissi est les ${selectedTheme} 🥝`)
    } else if (selectTheme.value == "default") {
        selectedTheme = null;
    }
}

//II- function loadingTheme :
function loadingTheme() {

    let cardTheme;
    let coverCardTheme;

    if (selectTheme.value == "animaux") {
        cardTheme = animaux;
        coverCardTheme = "./public/images/animaux/cover.png"
        shuffleCards()
        createCard()


    } else if (selectTheme.value == "fruits") {
        cardTheme = fruits;
        coverCardTheme = "./public/images/fruits/cover.png"
        shuffleCards()
        createCard()
    }

    // shuffle cards: 
    function shuffleCards(array) {

        for (let i = cardTheme.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [cardTheme[i], cardTheme[j]] = [cardTheme[j], cardTheme[i]];
        }
    }

    // III- function createCard()

    function createCard() {

        // feature à prévoir par la suite niveau de difficulté, par défaut 6 cartes :
        cardTheme.length = 6;

        // 1-créer une boucle qui va parcourir le tableau :
        cardTheme.forEach((picture) => {


            // création du container flip-card :
            const newFlipCard = document.createElement("div")
            newFlipCard.classList.add("flip-card")

            // création du container flip-card-inner qui contient front et back :
            const newFlipCardInner = document.createElement("div")
            newFlipCardInner.classList.add("flip-card-inner")

            newFlipCard.appendChild(newFlipCardInner)

            // création du front qui contient le coverCardTheme :
            const newFlipCardFront = document.createElement("div")
            newFlipCardFront.classList.add("flip-card-front")

            newFlipCardInner.appendChild(newFlipCardFront)

            const imgCover = document.createElement("img")
            imgCover.setAttribute("src", coverCardTheme)

            newFlipCardFront.appendChild(imgCover)

            // création du back qui contient les images du thème sélectionné :
            const newFlipCardBack = document.createElement("div")
            newFlipCardBack.classList.add("flip-card-back")

            newFlipCardInner.appendChild(newFlipCardBack);

            // création de l'image :
            const image = document.createElement("img")
            image.src = picture.src;
            image.alt = picture.name;
            image.title = picture.name;
            image.style.width = "155px"
            image.style.height = "200px"

            // intégration de l'image à back :
            newFlipCardBack.appendChild(image)

            // déclaration de la variable first block qui contient les originals cards :
            const gamingBoardFirstBlock = document.querySelector(".first_block");

            // intégration des originals cards à gamingBoardFirstBlock :
            gamingBoardFirstBlock.appendChild(newFlipCard)

            // création du tableau dans lequel on stocke les copies des originals cards :
            let clonedCards = [];
            // console.log(clonedCards);

            // stockage des originals cards :
            clonedCards.push(newFlipCard);

            // appel de la fonction cloneCard :
            clonedCard()

            return

            // IV  - cloneCard :
            function clonedCard() {

                for (let i = 0; i < clonedCards.length; i++) {

                    const card = clonedCards[i].cloneNode(true)
                    card.classList.add("newFlipCardInner")
                    card.removeAttribute("data-name")

                    const gamingBoardSecondBlock = document.querySelector(".second_block")
                    gamingBoardSecondBlock.appendChild(card)

                }
            }// clonedCards 
            

        }) //forEach

        
    } // createdCard 
}//loadingTheme

// VI - Active cards : 

    const allCards = document.querySelectorAll(".flip-card")
    
    let activeCards = [];
    
    allCards.forEach(card => {
        
        card.addEventListener("click", () => {
            
            card.classList.add("activeCard");
            
            activeCards.push(card)
            
            console.log(`active card`);
            
        })
        
    })
    
// III - function isPair()

// cardOne = ... ;
// cardTwo = ...;

// const playerScore = document.querySelector(".player-score")

// if(cardOne.title === cadTwo.title){

//     infoParty.innerHTML `Bravo, tu as trouvé une paire`;
//     playerScore.innerHTML += 1;
//     winnerIs()

// }else if(cardOne != cardTwo){

//     infoParty.innerHTML `Perdu, tu n'as trouvé la bonne paire`;
//     playerScore.innerHTML += 0;
//     winnerIs()
// }

// IV - function IncrementScore() :

// function winnerIs(){




// }

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

    // toggle rules of game :

    // toggle footer
}