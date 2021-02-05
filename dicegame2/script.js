//variables
const restart = document.querySelector("#restart");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const cScore1 = document.querySelector("#currentscore1");
const cScore2 = document.querySelector("#currentscore2");
const dice = document.querySelector(".dice");

//new game to begin, show roll dice and hold buttons
restart.addEventListener("click", (event) => {
    roll.style.display = "block";
    hold.style.display = "block";

});

let rollScore = 0;

roll.addEventListener("click", (event) => {
    const diceRoll = Math.floor(Math.random()*6) + 1;
    rollScore = rollScore += diceRoll
    let diceNum = document.getElementById("diceImg").src = "./img/dice" + diceRoll + ".png";
    diceNum = document.querySelector("#diceImg");
    diceNum.style.display = "block"; 
});
// //default score
// let rollScore = 0;

// //roll click event, diceroll generates number, rollscore 0 becomes 0 + the diceroll
// roll.addEventListener("click", (event) => {
//     const diceRoll = Math.floor(Math.random()*6) + 1;
//     rollScore = rollScore += diceRoll
// //if the rollscore is greater than or equal to 20 you win
//     if (rollScore >= 20) {
//         result.innerHTML = "winner";
//         score.innerHTML = rollScore; //this is the score
//         restart.style.display = "block"; //start again button
//     }
//  //if diceroll hits 1 while score is less than 20, you lose
//     else if (diceRoll == 1 && rollScore < 20) {
//         result.innerHTML = "You lost!"; //you lose
//         score.innerHTML = rollScore; //shows score
//         restart.style.display = "block"; //start again button
//     }
// //else show player 1, their score = to rollscore,  
//     else {
//         result.innerHTML = "Player 1";
//         score.innerHTML = rollScore;
// //img shortcut + variable + file name
//     }
//     let diceNum = document.getElementById("diceImg").src = "./img/dice" + diceRoll + ".png";
//     diceNum = document.querySelector("#diceImg");
//     diceNum.style.display = "block"; 
// })
// restart.addEventListener("click", (event) => {
//     location.reload();
// });



 