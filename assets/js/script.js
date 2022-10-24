/**
 * Define variables to be used
 */
let choices = document.getElementsByClassName('choice');
let computerChoice;
let playerChoice;
let result;
let playerScore;
let playerLives;

for (let choice of choices) {
    choice.addEventListener('click', function() {
        playerChoice = this.innerHTML;
        console.log(playerChoice);
        runGame(playerChoice);
    })
}

