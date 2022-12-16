//GREAT MINDS THINK ALIKE
//(function () {

//Screen elements
const welcomeScreen = document.querySelector('.welcome-screen')
const teamScreen = document.querySelector('.team-screen')
const startGameScreen = document.querySelector('.start-game-screen')
const startRoundScreen = document.querySelector('.start-round-screen')
const questionScreen = document.querySelector('.question-screen')
const tallyScreen = document.querySelector('.tally-screen')
const gameOverScreen = document.querySelector('.game-over-screen')

const headDiv = document.querySelector('.head-div')
const footDiv = document.querySelector('.foot-div')

//Functions for switching between screens
function xOutOf(screenElement) {
    screenElement.classList.add('hidden')
}
function bringUp(screenElement) {
    //Change colors on start game screen, start round screen and tally screen, and game over screen
    switch (screenElement) {
        case startGameScreen:
            headDiv.style.backgroundColor = `rgb(203, 144, 196)`;
            footDiv.style.backgroundColor = `rgb(203, 144, 196)`;
            document.body.style.color = `rgb(203, 144, 196)`;
            break;
        case startRoundScreen:
            headDiv.style.backgroundColor = `rgb(255, 142, 37)`;
            footDiv.style.backgroundColor = `rgb(255, 142, 37)`;
            document.body.style.color = `rgb(255, 142, 37)`;
            break;
        case tallyScreen:
            headDiv.style.backgroundColor = `rgb(134, 145, 248)`;
            footDiv.style.backgroundColor = `rgb(134, 145, 248)`;
            document.body.style.color = `rgb(134, 145, 248)`;
            break;
        case gameOverScreen:
            headDiv.style.backgroundColor = `rgb(255, 144, 90)`;
            footDiv.style.backgroundColor = `rgb(255, 144, 90)`;
            document.body.style.color = `rgb(255, 144, 90)`;
            break;
        default:
            break;
    }
    screenElement.classList.remove('hidden') 

    //If there is a .dialog-box div, un-hide each child p node after a second
    const dialog = screenElement.childNodes[1]

    //PSEUDO BUG --  timing isn't as intended
    if (dialog.classList.contains('dialog-box')) {
        const pElems = dialog.children
        for (let i = 0; i < pElems.length; i++) {
            setTimeout(() => {
                pElems[i].classList.remove('unwritten')
            }, 1000);
        }
    }
}

//WELCOME screen

//When start game button is clicked, hide the welcome screen and bring up the Teams screen
const welcomeBtn = document.querySelector('.welcome-btn')
welcomeBtn.addEventListener('click', () => {
    xOutOf(welcomeScreen)
    bringUp(teamScreen)
})

//TEAMS screen 

//Extra stuff -- Have team name suggestions

//Team class definition
class Team {
    constructor(name, points = 0) {
        this.name = name;
        this.points = points;
    } 
    //Create prototype method to add to the team's points
    addPoints(n) {
        this.points += n
    }
}

//Create teams with user input
let teams = []
const teamForms = document.querySelectorAll('.team-screen form')
//BUG -- After an invalid input is submitted, program doesn't accept anything 
for (let i = 0; i < 2; i++) {

    //When a team inputs their team name...
    teamForms[i].addEventListener('submit', (e) => {
        e.preventDefault()

        //Grab the name submitted by the user
        const nameInput = document.querySelector(`#nameTeam${i+1}`)

        //Check if the team names are over 3 chars
        if (checkLength(nameInput)) {

            //Create a team object
            teams.push(new Team(nameInput.value))

            //Update submit button
            e.target.lastElementChild.innerHTML = `Ready!`
            e.target.lastElementChild.style.backgroundColor = `rgb(203, 144, 196)`

            //If both teams are created, it's time to start the game
            if (teams.length > 1){
                xOutOf(teamScreen)
                bringUp(startGameScreen)
            }

        } else {
            nameInput.reportValidity()
        }
    })
}

function checkLength(nameSubmission){
    let formIsValid = true 
    
    //Name should be at least three characters long
    if (nameSubmission.value.length < 3) { 
        nameSubmission.validity.valid = false
        nameSubmission.setCustomValidity(`Where's the rest of your name?`)
        formIsValid = false
    } else {
        nameSubmission.validity.valid = true
        nameSubmission.classList.remove('invalid')
    }
    return formIsValid
}

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
    score1Display.innerHTML = teams[0].points
    score2Display.innerHTML = teams[1].points
}

//START GAME screen

//Start game counter
//Can (Should?) turn these into private variables
let roundCounter= 0
const maxRounds = 4
let questionQueue
let teamInTurn

//Shuffle a la fisher yates
function shuffleArray(array) {

    //For each element (last to the first),
    for (let i = array.length - 1; i > 0; i--) {

        //Get a random element with a smaller index,
      const j = Math.floor(Math.random() * (i + 1));

      //And swap them.
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

//Click on the button to start the game
const startGameBtn = document.querySelector('.start-game-screen button')
const currentTeam = document.querySelector('.team-in-turn')
const nextRound = document.querySelector('.next-round')
startGameBtn.addEventListener('click', () => {

    //Shuffle question bank
    questionQueue = shuffleArray(questionBank)

    //Write team names on scoreboard and round counter in start round button
    currentTeam.innerHTML = teams[roundCounter%2].name
    nextRound.innerHTML = roundCounter+1

    //Start next round
    xOutOf(startGameScreen)
    bringUp(startRoundScreen)
    putUpScoreBoard()
})

//START ROUND screen

const startRoundBtn = document.querySelector('.start-round-screen button')
const question = document.querySelector('.question')
startRoundBtn.addEventListener('click', () => {

    //write the question
    question.innerHTML = questionQueue[roundCounter] // BUG -- Uncaught TypeError: Cannot read properties of undefined (reading '0') at HTMLButtonElement .... because I forgot the return statement in the shuffleArray function

    //update scoreboard's round
    roundCounter++
    rndDisplay.innerHTML = roundCounter

    //hide Start Round screen and  bring up question screen
    xOutOf(startRoundScreen)
    bringUp(questionScreen)
    
    //QUESTION screen

    //Extra stuff
    // add timer on screen

    //after x seconds, 
    setTimeout(() => {
        //hide the question screen and bring up the tally screen
        xOutOf(questionScreen)
        bringUp(tallyScreen)
      }, 6000)
})

//TALLY screen

//Target the tally form and its input
const tallyForm = document.querySelector('.tally-screen form')
const tally = document.querySelector('#tally')

//User submits their team's score for the current round.
tallyForm.addEventListener('submit', (e) => {
        e.preventDefault()

        //Check that the score isn't a negative number...?
        if (1) { //if (checkValidation(e)) {

            //Grab the freshly scored points
            const newPoints = parseInt(tally.value) 
            //BUG -- points were undefined. Even though the tally input is type="number", the value is a string. 
            //console.log(typeof(teams[roundCounter%2].points))
            //console.log(typeof(tally.value))

            //The input (number type) is added to the team in turn's score
            teams[roundCounter%2].addPoints(newPoints)
            updateScoreBoard()

            //Hide the Tally screen
            xOutOf(tallyScreen)

            //If we're not on the last round, start the next one
            if(roundCounter < maxRounds) {
                nextRound.innerHTML = roundCounter+1
                bringUp(startRoundScreen)
                tallyForm.reset()
            } else {

                //If it's the last round, calculate the winner,
                const winner = calculateWinner()

                //write it to the game over screen, 
                const winnerDisplay = document.querySelector('.winner')
                winnerDisplay.innerHTML = winner
                
                //and bring up the game over screen
                bringUp(gameOverScreen)
            }
        } else {
            tallyForm.reportValidity()
        }
})

function calculateWinner() {
    if (teams[0].points > teams[1].points) {
        return teams[0].name
    } else {
        return teams[1].name
    }
}

//})();