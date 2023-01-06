//Creating the Array to Hold Imag Sources
const ImagesArray = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"];


// Generating The Random Number for Dice Indexes
let randomIndexDice1 = Math.floor(Math.random() * 6);

let randomIndexDice2 = Math.floor(Math.random() * 6);


// Selecting The Images 
let player1Dice = document.querySelector(".img1");

let player2Dice = document.querySelector(".img2");



//Using the Random Dice Indexes to Change Images
player1Dice.setAttribute("src", ImagesArray[randomIndexDice1]);

player2Dice.setAttribute("src", ImagesArray[randomIndexDice2]);

