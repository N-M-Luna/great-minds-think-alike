//GREAT MINDS THINK ALIKE

//Global variables
//Screen Elements
//Game logic (welcome -> teams -> start game -> start round -> question -> tally -> back to start round or game over)
//Helper functions

//Remove IIFE for Jasmine
(function () {

//Global variables and constants
let teams = []
let roundCounter= 0
const maxRounds = 4
let questionQueue

//Screen elements
const welcomeScreen = document.querySelector('.welcome-screen')
const welcomeBtn = document.querySelector('.welcome-btn')

const teamScreen = document.querySelector('.team-screen')
const teamForms = document.querySelectorAll('.team-screen form')
const nameInput1 = document.querySelector(`#nameTeam1`)
const nameInput2 = document.querySelector(`#nameTeam2`)

const startGameScreen = document.querySelector('.start-game-screen')
const startGameBtn = document.querySelector('.start-game-screen button')
const currentTeam = document.querySelector('.team-in-turn')
const nextRound = document.querySelector('.next-round')

const startRoundScreen = document.querySelector('.start-round-screen')
const startRoundBtn = document.querySelector('.start-round-screen button')
const question = document.querySelector('.question')

const questionScreen = document.querySelector('.question-screen')

const tallyScreen = document.querySelector('.tally-screen')
const tallyForm = document.querySelector('.tally-screen form')
const tally = document.querySelector('#tally')

const gameOverScreen = document.querySelector('.game-over-screen')
const winnerDisplay = document.querySelector('.winner')

//Screen outline elements
const headDiv = document.querySelector('.head-div')
const footDiv = document.querySelector('.foot-div')

//Scoreboard elements
const scoreboard = document.querySelector('.scoreboard')
const rndDisplay = document.querySelector('.rnd')
const player1Display = document.querySelector('.player1')
const player2Display = document.querySelector('.player2')
const score1Display = document.querySelector('.score1')
const score2Display = document.querySelector('.score2')


//WELCOME screen

//When start game button is clicked, hide the welcome screen and bring up the Teams screen
welcomeBtn.addEventListener('click', () => {

    const placeholder = ['Puffing Hufflepuffs', 'Red Shirts', 'Jedis in Training', 'Time Wimey Quizzy Wizzy']

    //Generate a placeholder team name
    let randomIndex = Math.floor(Math.random()*2)
    nameInput1.setAttribute('placeholder', placeholder[randomIndex])
    randomIndex = Math.floor(2 + Math.random()*2)
    nameInput2.setAttribute('placeholder', placeholder[randomIndex])
    
    //Go to teams screen
    xOutOf(welcomeScreen)
    bringUp(teamScreen)
})

//TEAMS screen 

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

//BUG -- After an invalid input is submitted, program doesn't accept anything 

//When a team inputs their team name...
teamForms[0].addEventListener('submit', (e) => {
    e.preventDefault()

    //Check if the team names are over 3 chars
    if (checkLength(nameInput1)) {

        //Create a team object
        teams.push(new Team(nameInput1.value))

        //Update submit button
        e.target.lastElementChild.innerHTML = `Ready!`
        e.target.lastElementChild.style.backgroundColor = `rgb(203, 144, 196)`

        //If both teams are created, it's time to start the game
        if (teams.length > 1){
            xOutOf(teamScreen)
            bringUp(startGameScreen)
        }
    } else {
        nameInput1.reportValidity()
        return
    }
})

teamForms[1].addEventListener('submit', (e) => {
    e.preventDefault()

    //Check if the team names are over 3 chars
    if (checkLength(nameInput2)) {

        //Create a team object
        teams.push(new Team(nameInput2.value))

        //Update submit button
        e.target.lastElementChild.innerHTML = `Ready!`
        e.target.lastElementChild.style.backgroundColor = `rgb(203, 144, 196)`

        //If both teams are created, it's time to start the game
        if (teams.length > 1){
            xOutOf(teamScreen)
            bringUp(startGameScreen)
        }
    } else {
        nameInput2.reportValidity()
        return
    }
})

//START GAME screen

//Click on the button to start the game
startGameBtn.addEventListener('click', () => {

    //Shuffle question bank
    questionQueue = shuffleArray(questionBank)

    //Write team name and round counter in start round button
    currentTeam.innerHTML = teams[roundCounter%2].name
    nextRound.innerHTML = roundCounter+1

    //Start next round
    xOutOf(startGameScreen)
    bringUp(startRoundScreen)
    putUpScoreBoard()
})

//START ROUND screen

startRoundBtn.addEventListener('click', () => {

    //write the question
    question.innerHTML = questionQueue[roundCounter] //XBUG -- Uncaught TypeError: Cannot read properties of undefined (reading '0') at HTMLButtonElement .... because I forgot the return statement in the shuffleArray function

    //update scoreboard's round
    roundCounter++
    rndDisplay.innerHTML = roundCounter

    //hide Start Round screen and  bring up question screen
    xOutOf(startRoundScreen)
    bringUp(questionScreen)

    //Extra stuff -- add timer on screen
    //Extra stuff -- make the .question-screen into a full screen modal (with a timer) that goes away after x seconds

    //after x seconds, 
    setTimeout(() => {
        //hide the question screen and bring up the tally screen
        xOutOf(questionScreen)
        bringUp(tallyScreen)
      }, 6000)
})

//TALLY screen

//User submits their team's score for the current round.
tallyForm.addEventListener('submit', (e) => {
        e.preventDefault()

            //Grab the freshly scored points
            const newPoints = parseInt(tally.value) 
            //XBUG -- points were undefined. Even though the tally input is type="number", the value is a string. 
            //console.log(typeof(teams[roundCounter%2].points))
            //console.log(typeof(tally.value))

            //The input (number type) is added to the team in turn's score
            teams[(roundCounter+1)%2].addPoints(newPoints)
            updateScoreBoard()

            //Hide the Tally screen
            xOutOf(tallyScreen)

            //If we're not on the last round, start the next one
            if(roundCounter < maxRounds) {
                currentTeam.innerHTML = teams[roundCounter%2].name
                nextRound.innerHTML = roundCounter+1
                bringUp(startRoundScreen)
                tallyForm.reset()
            } else {

                //If it's the last round, calculate the winner,
                const winner = calculateWinner(teams)

                if (winner === 0){
                    winnerDisplay.innerHTML = `It's a tie!` 
                } else { 
                    winnerDisplay.innerHTML = `Team ${winner} wins!`
                }
                
                //and bring up the game over screen
                bringUp(gameOverScreen)
            }
})

//Functions for switching between screens
function xOutOf(screenElement) {
    screenElement.classList.add('hidden')
}
function bringUp(screenElement) {
    //Change colors on start game screen, start round screen and tally screen, and game over screen
    changeColor(screenElement)
    screenElement.classList.remove('hidden') 

    //If there is a .dialog-box div, un-hide each child p node after a second
    const dialog = screenElement.childNodes[1]
    
    if (dialog.classList.contains('dialog-box')) {
        const pElems = dialog.children
        for (let i = 0; i < pElems.length; i++) {
            //PSEUDO-BUG --  timing isn't as intended 
            //setTimeout(() => {
                pElems[i].classList.remove('unwritten')
            //}, 1000);
        }
    }

}

function changeColor(screenElement) {
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
}

//Function for form validation
function checkLength(nameSubmission){
    let formIsValid = true 
    
    //Name should be at least three characters long
    if (nameSubmission.value.length < 3) { 
        nameSubmission.validity.valid = false
        nameSubmission.setCustomValidity(`Team names should be at least three characters long.`)
        formIsValid = false
    } else {
        nameSubmission.validity.valid = true
        nameSubmission.classList.remove('invalid')
    }
    return formIsValid
}

//Function to shuffle (a la fisher yates)
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

  //Scoreboard functions

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

  //Function that returns the winner team's name 
  function calculateWinner(teamRoster) {
    if (teamRoster[0].points > teamRoster[1].points) {
        return teamRoster[0].name
    } else if (teamRoster[0].points < teamRoster[1].points) {
        return teamRoster[1].name
    } else {
        return 0
    }
}

})();