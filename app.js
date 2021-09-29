// grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');

const orangeButton = document.getElementById('color-button-1');
const yellowButton = document.getElementById('color-button-2');
const greenButton = document.getElementById('color-button-3');
const blueButton = document.getElementById('color-button-4');
const purpleButton = document.getElementById('color-button-5');
let headerColor = document.getElementById('header');
let footerColor = document.getElementById('footer');

// initialize global state

// set event listeners 
button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
});






orangeButton.addEventListener('click', ()=>{
    headerColor.style.background = 'orange';
    footerColor.style.background = 'orange';
});
yellowButton.addEventListener('click', ()=>{
    headerColor.style.background = 'yellow';
    footerColor.style.background = 'yellow';
});
greenButton.addEventListener('click', ()=>{
    headerColor.style.background = 'green';
    footerColor.style.background = 'green';
});
blueButton.addEventListener('click', ()=>{
    headerColor.style.background = 'blue';
    footerColor.style.background = 'blue';
});
purpleButton.addEventListener('click', ()=>{
    headerColor.style.background = 'purple';
    footerColor.style.background = 'purple';
});


// when button clicked
// get user input
// use user input to update state 
// update DOM to reflect the new state







