//GREAT MINDS THINK ALIKE
(function () {

//Screen elements
const welcomeScreen = document.querySelector('.welcome-screen')
const teamScreen = document.querySelector('.team-screen')
const startGameScreen = document.querySelector('.start-game-screen')
const startRoundScreen = document.querySelector('.start-round-screen')

//Functions for switching between screens
function xOutOf(screenElement) {
    screenElement.classList.add('hidden')
}
function bringUp(screenElement) {
    screenElement.classList.remove('hidden') 
    //Extra stuff
    // Start a wiggle animation on the .mascot img 
    // After img.animation ends, a wild div appears
    // Once dialog div is visible, p is fades in left to right
    //This happens everytime, except when the new screen is the question screen.
}

//WELCOME screen

//Extra stuff
// x seconds after the page loades, h1 element slides up and out of screen
// x seconds after the p.animation ends, element slides up into the screen
// x after the h1.hide animation ends, p element slides up and scrolls away.
// loop again?

//When start game button is clicked, hide the welcome screen and bring up the Teams screen
const welcomeBtn = document.querySelector('.welcome-btn')
welcomeBtn.addEventListener('click', () => {
    xOutOf(welcomeScreen)
    bringUp(teamScreen)
})

//TEAMS screen 

//Extra stuff
// have suggestions
// when ready-btn is clicked, changes to ready!

//Team class definition
class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
    } 
}

//Create teams with user input
let teams = []
const teamForms = document.querySelectorAll('.team-screen form')
for (let i = 0; i < 2; i++) {

    //When a team inputs their team name...
    teamForms[i].addEventListener('submit', (e) => {
        e.preventDefault()

        //Check if the team names are over 3 chars
        if (1) { //if (checkValidation(e)) {

            //Create a team object
            const nameInput = document.querySelector(`#nameTeam${i+1}`)
            teams.push(new Team(nameInput.value))

            //If both teams are created, it's time to start the game
            if (teams.length > 1){
                xOutOf(teamScreen)
                bringUp(startGameScreen)
            }

        } else {
            formElem.reportValidity()
        }
    })
}

//Below is sample code of form validation
/*
function checkValidation(e){
    let formIsValid = true //Form is valid unless one (or more) of the validations fail
    console.log(`Validating {name: ${nameElem.value}, email: ${emailElem.value}, message: ${messageElem.value}}`)
    console.log(`Results are in:`)
    
    //Name should be at least three characters long
    if (nameElem.value.length < 3) { 
        nameElem.validity.valid = false
        nameElem.setCustomValidity(`Where's the rest of your name?`)
        formIsValid = false
    } else {
        nameElem.validity.valid = true
        nameElem.classList.remove('invalid')
    }
    return formIsValid
}
*/

//SCOREBOARD element

const scoreboard = document.querySelector('.scoreboard')
const rndDisplay = document.querySelector('.rnd')
const player1Display = document.querySelector('.player1')
const player2Display = document.querySelector('.player2')
const score1Display = document.querySelector('.score1')
const score2Display = document.querySelector('.score2')

function putUpScoreBoard() {
    scoreboard.classList.remove('hidden')
    player1Display.innerHTML = teams[0].name
    player2Display.innerHTML = teams[1].name
    rndDisplay.innerHTML = `${roundCounter}`
}

function updateScoreBoard() {
    score1Display.innerHTML = teams[0].score
    score2Display.innerHTML = teams[1].score
}

//START GAME screen

//Click on the button to start the game
let roundCounter
const startGameBtn = document.querySelector('.start-game-screen button')
const currentTeam = document.querySelector('.team-in-turn')
const nextRound = document.querySelector('.next-round')
startGameBtn.addEventListener('click', () => {
    //Start game-round counter
    roundCounter = 0

    //Shuffle question bank

    //Write team names on scoreboard and round counter in start round button
    currentTeam.innerHTML = teams[roundCounter%2].name
    nextRound.innerHTML = roundCounter+1

    //Start next round
    xOutOf(startGameScreen)
    bringUp(startRoundScreen)
    putUpScoreBoard()
})

//START ROUND screen

const startRoundBtn = document.querySelector('.start-game-screen button')
startRoundBtn.addEventListener('click', () => {
    //write the question
    //update scoreboard's round
    //hide Start Round screen and  bring up question screen
})


})();