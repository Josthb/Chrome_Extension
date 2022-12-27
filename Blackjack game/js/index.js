//Variables


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// DOM variables
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    playerName:  "Joueur",
    playerChips: 100
}

let playerEl = document.getElementById("gain-el")
playerEl.textContent = player.playerName + " : " + player.playerChips + "€"

// Function


function getRandomCard(){
    //Le +1 permet d'avoir un nombre entre 1 et 13 car sinon 
    //on aurait un nombre entre 0 et 12.
    //Math.floor permet d'arrondir le nombre à l'entier inférieur
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1){
        return 11
    }
    else if (randomNumber >= 11 && randomNumber <= 13){
        return 10
    }
    else{
        return randomNumber
    }
    


}



function startGame(){
    //Dès que le jeu commence, on tire deux cartes et on
    //les ajoute à la variable cards puis on les calcule
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}






function renderGame(){

    cardsEl.textContent = "Cartes : "

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }

    if (sum <= 20){
        message = "Voulez vous tirer une nouvelle carte ?"
    }
    else if (sum === 21){
        message = "Vous avez un BlackJack!"
        hasBlackJack = true
        
    }
    else{
        message = "Vous avez perdu!"
        isAlive = false
    }

    // Display
    messageEl.textContent = message
    sumEl.textContent = "Total : " + sum
    
}

function newCard(){
    //Si le joueur est en vie et n'a pas de BlackJack
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard

        renderGame()
    
   
    }
    //Si le joueur est en vie et a un BlackJack
    else {
        messageEl.textContent = "Vous ne pouvez pas tirer de carte"
    }
}

