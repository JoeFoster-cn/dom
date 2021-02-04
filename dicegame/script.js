const roll = document.querySelector("#roll");
const score = document.querySelector("#score");
const restart = document.querySelector("#restart");
const result = document.querySelector("#player");
const die = document.querySelector(".die");
const dice = document.querySelector(".dice");


let rollScore = 0;


roll.addEventListener("click", (event) => {
    const diceRoll = Math.floor(Math.random()*6) + 1;
    rollScore = rollScore + diceRoll
 //   document.querySelector(".dice") = event.diceRoll;
    if (rollScore >= 20) {
        result.innerHTML = "winner";
        score.innerHTML = rollScore;
        restart.style.display = "block";
    }
 
    else if (diceRoll == 1 && rollScore < 20) {
        result.innerHTML = "You lost!";
        score.innerHTML = rollScore;
        restart.style.display = "block";
    }
    else {
        result.innerHTML = "Player 1";
        score.innerHTML = rollScore;
        let diceNum = document.querySelector("#face-") + diceRoll;
        document.querySelector(diceNum).style.display = "block";
    }
   
})

restart.addEventListener("click", (event) => {
    location.reload();
});

/*trying to use roll button to reset page after losing
roll.addEventListener("click", (event) => {
    if (result == "You lost!")
    location.reload();
});*/

 