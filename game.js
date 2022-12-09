//GREAT MINDS THINK ALIKE
//(function () {

    //parking this here for now
    const questionBank = [
        `Name an animal that starts with the letter E.`,
        `Name a word that rhymes with "teeny".`,
        `Name something that gets pumped up.`,
        `Name something you do that rhymes with "grow up."`,
        `Name something that's easier to catch than catching a man.`,
        `Name something to which a lot of kids seem almost addicted.`,
        `Fill in the blank: You're in deep ____.`,
        `Name something people ride that causes them to throw up.`,
        `Fill in the blank: I did everything for my guy and I never got a ____.`,
        `Name something in your refrigerator that you should thank a cow for.`,
        `Name something that drips.`,
        `Name something kids just love to jump on.`,
        `Give me a three-letter word that starts with the letter "Z."`,
        `Name something you'd do if your date took you to Chuck E. Cheese.`,
        `Name your favorite thing to do at parties.`,
        `Name something people say is on the house.`,
        `Which of the Seven Dwarfs describes how you feel after a couple of drinks?`,
        `Fill in the blank: Hold the ____.`,
        `Roses are red. Violets are blue. What kind of flowers do cheap guys buy you?`,
        `Name a weather condition that would be a good name for a wrestler.`,
        `Name a word that rhymes with "will" that's associated with doctors.`,
        `What's something that can turn an ordinary bath into a romantic one?`,
        `Name a place that's filled with people who don't want to be there.`,
        `Name something specific you make sure to clean before company comes over.`,
        `Name a movie monster you think could take Dracula in a fight.`,
        `Name an office supply you'd use to pick food out of your teeth.`,
        `Fill in the blank: In the bedroom, my husband's superhero name would be ____ Man.`,
        `Name something that might be referred to as a dead end.`,
        `Name something a husband might find all over the bed that makes him suspect his wife is having an affair with a baker.`,
        `If Batman went broke, he just might have to sell his Bat-what`,
        `Name someplace a teenager complains about having to go.`,
        `What's the most fun thing to do with another woman?`,
        `Name a way eggs are prepared that could also describe a person.`,
        `Name something specific that has a long neck.`,
        `Name something that some people are afraid to ride on or in.`,
        `Fill in the blank: Tongue ______.`,
        `Name something that has the word "super" in it.`,
        `If a man ran out of deodorant, name a fruit he might rub under his pits to hide the odor.`,
        `Name something that comes in packs of six or 12.`,
        `Name a US city where lots of rich people live.`,
        `Fill in the blank: Lady _____.`,
        `Name a way your man is like a good cut of meat.`,
        `Fill in the blank: Having a bird poop on you is bad, but imagine how much worse it would be if ______ could fly.`,
        `Name a good place to go when you want to cry.`,
        `If you ran your fingers through a man's hair, what would you hate to find in it?`,
        `Name something people deliver for a living.`,
        `Name an animal that's easy to imitate in charades.`,
        `After you murder someone, name something specific you must quickly get rid of.`,
        `Name a kind of hoop.`,
        `Tell me something you have that has lasted longer than most of your relationships.`,
        `Give me one word you'd use to describe the last kiss your man gave you.`,
        `What US state do you think has the most beautiful women?`,
        `Name something that's cheap and greasy.`,
        `Fill in the blank: My man is a love ____.`,
        `Tell me something of yours that you swear is possessed.`,
        `Name a kind of ball it might feel like a woman is pushing out when she gives birth.`,
        `Name a word a dog understands.`,
        `Give me a phrase that starts with the words, "Off the..."`,
        `Tell me a country where you think the men are sexier than American men.`,
        `Name something you stuff just as full as you can get it.`,
        `If a man speaks seven languages, which one would he use when he wants to sound sexy?`,
        `Name a good musical instrument for someone who is full of hot air.`,
        `Give me a word that rhymes with "hustle."`,
        `You know a guy is really into you if he kisses your what?`,
        `Name an animal that doesn't have a leg to stand on.`,
        `What would it be hard to do if you accidentally put on superglue instead of lipstick?`,
        `Name an animal that might like to watch the DVD Squirrels Gone Wild.`,
        `Name the first thing Steve Harvey would remove if he were in a game of strip poker.`,
        `Name a place you stop going to when you're broke.`,
        `Name something a mother might pick out for her adult son.`,
        `If they made a Judge Judy doll, name something it might come with.`,
        `Name something that parents can't wait for their children to get out of.`,
        `Name a place you'd hate to find toenail clippings.`,
        `In one word, describe the underwear your man is wearing right now.`,
        `Name an American city where they know how to party hard.`,
        `Name something you associate with camels.`,
        `If Steve Harvey were your neighbor, name something of his you might ask to borrow.`,
        `Name a place you'd hate to spend even one night.`,
        `Name something you'd hate to have happen while you're taking a bath.`,
        `And name something of your wife's you like to wear because it's so soft.`]

//Screen elements
const welcomeScreen = document.querySelector('.welcome-screen')
const teamScreen = document.querySelector('.team-screen')
const startGameScreen = document.querySelector('.start-game-screen')
const startRoundScreen = document.querySelector('.start-round-screen')
const questionScreen = document.querySelector('.question-screen')
const tallyScreen = document.querySelector('.tally-screen')
const gameOverScreen = document.querySelector('.game-over-screen')

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
    constructor(name, points = 0) {
        this.name = name;
        this.points = points;
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
            teamForms.reportValidity()
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
    score1Display.innerHTML = teams[0].points
    score2Display.innerHTML = teams[1].points
}

//START GAME screen

//Start game counter
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

            //The input (number type) is added to the team in turn's score
            teams[roundCounter%2].points += parseInt(tally.value) 
            //BUG -- points were undefined. Even though the tally input is type="number", the value is a string. 
            //console.log(typeof(teams[roundCounter%2].points))
            //console.log(typeof(tally.value))
            updateScoreBoard()

            //Hide the Tally screen
            xOutOf(tallyScreen)

            //If we're not on the last round, start the next one
            if(roundCounter < maxRounds) {
                nextRound.innerHTML = roundCounter+1
                bringUp(startRoundScreen)
            } else {
                //If it's the last round, bring up the game over screen
                bringUp(gameOverScreen)
            }
        } else {
            tallyForm.reportValidity()
        }
})

//})();