//variables list
const restart = document.querySelector("#restart");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
let cScore1 = document.querySelector("#currentscore1");
let cScore2 = document.querySelector("#currentscore2");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
let rollScore1 = 0;
let rollScore2 = 0;
let won = false;
let activeplayer = 1;

//begin by clicking new game, show roll dice and hold buttons
restart.addEventListener("click", (event) => {
    roll.style.display = "block"; //display roll button
    hold.style.display = "block"; //display hold button
    if (won == true) { //if someone has won and new game is clicked, the page refreshes
        location.reload();}
});

//roll button
roll.addEventListener("click", (event) => {
    let diceRoll = Math.floor(Math.random()*6) + 1; //diceroll number generates
    let diceNum = document.getElementById("diceImg").src = "./img/dice" + diceRoll + ".png";
        diceNum = document.querySelector("#diceImg"); //dice image shows based on diceroll
        diceNum.style.display = "block"; 

    if (activeplayer == 1) {  //active player select
        if (diceRoll == 1) {  //has a 1 been rolled?
            activeplayer = 2; //if 1 is rolled, swap to player2
            cScore1.textContent = 0; //clear player1 current score
            reset()
            return
        }
        rollScore1 = rollScore1 += diceRoll; //player1 rolls dice
        cScore1.textContent = rollScore1; //player1 current score updates
    }
    else { //if not player1, then it's player2
        if (diceRoll === 1) {
            activeplayer = 1; //if 1 is rolled, swap to player1
            cScore2.textContent = 0; //clear player2 current score
            reset()
            return   
        }
        rollScore2 = rollScore2 += diceRoll; //player2 rolls dice
        cScore2.textContent = rollScore2; //player2 current score
    }
});

hold.addEventListener("click", (event) => {
    if (activeplayer == 1) { //if it's player1 
        score1.textContent = parseInt(score1.textContent) + rollScore1; //adds current score to held score
        if (parseInt(score1.textContent) >= 20) { //if held score is greater than or equal to 20, player1 wins
            won = true; //set won to true
            player1.textContent = "Winner"; //set player1 to winner
    }
    activeplayer = 2; //swap to player 2
    box1.classList.remove("box1"); //swap the colour of the boxes based on the winner
    box1.classList.add("box2");
    box2.classList.add("box1");
    box2.classList.remove("box2");
}    
    else if (activeplayer = 2) { //if it's player2
        score2.textContent = parseInt(score2.textContent) + rollScore2; //adds current score to held score
        if (parseInt(score2.textContent) >= 20) { //if held score is greater than or equal to 20, player2 wins
            won = true; //set won to true
            player2.textContent = "Winner"; //set player2 to winner
    }
    activeplayer = 1;
    box1.classList.remove("box1"); //swap the colour of the boxes based on the winner
    box1.classList.add("box2");
    box2.classList.add("box1");
    box2.classList.remove("box2");
} 
    reset()

});

function reset() { //reset current score and dice rolls for both players
    cScore1.textContent = 0;
    cScore2.textContent = 0;
    rollScore1 = 0;
    rollScore2 = 0
} 