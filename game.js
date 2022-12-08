//GREAT MINDS THINK ALIKE
(function () {

//Screen elements
const welcomeScreen = document.querySelector('.welcome-screen')
const teamScreen = document.querySelector('.team-screen')
const startGameScreen = document.querySelector('.start-game-screen')

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

})();