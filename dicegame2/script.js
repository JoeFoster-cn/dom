//variables
const restart = document.querySelector("#restart");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
let cScore1 = document.querySelector("#currentscore1");
let cScore2 = document.querySelector("#currentscore2");
let activeplayer = 1;


//new game to begin, show roll dice and hold buttons
restart.addEventListener("click", (event) => {
    roll.style.display = "block";
    hold.style.display = "block";
    if (won == true) {
        location.reload();}
});

let rollScore1 = 0;
let rollScore2 = 0;
let won = false;


//P1 click roll, dice shows with the number rolled 
roll.addEventListener("click", (event) => {
    let diceRoll = Math.floor(Math.random()*6) + 1;
    let diceNum = document.getElementById("diceImg").src = "./img/dice" + diceRoll + ".png";
        diceNum = document.querySelector("#diceImg");
        diceNum.style.display = "block"; 

    if (activeplayer == 1) { 
        if (diceRoll == 1) {
            activeplayer = 2;
            cScore1.textContent = 0;
            reset()
            return
        }
        rollScore1 = rollScore1 += diceRoll;
        cScore1.textContent = rollScore1;
        if (parseInt(score1.textContent) >= 20) {
            won = true;
            player1.textContent = "Winner";
            cScore1.textContent = rollScore1;
        }
    }
    else {
        if (diceRoll === 1) {
            activeplayer = 1;
            cScore2.textContent = 0;
            reset()
            return
            
        }
        rollScore2 = rollScore2 += diceRoll;
        cScore2.textContent = rollScore2;
        console.log(score1.textContent);
        if (parseInt(score1.textContent) >= 20) {
            console.log("Hello");
            won = true;
            player2.textContent = "Winner"
            cScore2.textContent = rollScore2;
        }
    }
});

hold.addEventListener("click", (event) => {
    if (activeplayer == 1) {
        score1.textContent = parseInt(score1.textContent) + rollScore1; 
        activeplayer = 2;
    }
       
    else if (activeplayer = 2) {
        score2.textContent = parseInt(score2.textContent) + rollScore2;
        activeplayer = 1
    }
    reset()

});


function reset() {
    cScore1.textContent = 0;
    cScore2.textContent = 0;
    rollScore1 = 0;
    rollScore2 = 0
}




// restart.addEventListener("click", (event) => {
//     if (won == true) {
//         location.reload();}
// });


// hold.addEventListener("click", (event => {
//     score1.innerHTML = cScore1;

// }))

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



 