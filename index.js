//Creating the Array to Hold Imag Sources
const ImagesArray = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"];


// Generating The Random Number for Dice Indexes
let randomIndexDice1 = Math.floor(Math.random() * 6);

let randomIndexDice2 = Math.floor(Math.random() * 6);


// Selecting The Images 
let player1Dice = document.querySelector(".img1");

let player2Dice = document.querySelector(".img2");


// Selecting the Header/Game Conclusion Message



//Using the Random Dice Indexes to Change Images
player1Dice.setAttribute("src", ImagesArray[randomIndexDice1]);

player2Dice.setAttribute("src", ImagesArray[randomIndexDice2]);



if (randomIndexDice1 > randomIndexDice2) {
    console.log("Player 1 wins");
}

else if (randomIndexDice2 > randomIndexDice1) {
    console.log("Player 2 wins");
}

else {
    console.log("It's a Tie!");
}