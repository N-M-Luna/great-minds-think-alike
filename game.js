//GREAT MINDS THINK ALIKE

//Screen elements
const teamScreen = document.querySelector('.team-screen')
//Functions for switching between screens
function xOutOf(screenElement) {
    screenElement.classList.add('hidden')
}
function bringUp(screenElement) {
    screenElement.classList.remove('hidden') 
    //If the screenElement has a .mascot img, then fire wiggle animation  
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
    xOutOf(teamScreen)
    bringUp(teamScreen)
})

//TEAMS screen

//Extra stuff
// once page loads, mascot does a little wiggle *****repeat every time we change screens
// after img.animation ends, a wild div appears ******
//once dialog div is visible, p is fades in left to right ******* 

// validate form, names should be 3-15 chars long
// have suggestions

// when ready-btn is clicked, changes to ready!


// When both Ready buttons are clicked, hide Pick Your Team screen and bring up the Start Game screen
// Build player objects with name and points attributes

