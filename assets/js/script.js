/**
 * Define variables to be used
 */
let choices = document.getElementsByClassName('choice');
let computerChoice = document.getElementById('computer-choice');
let playerChoice = document.getElementById('player-choice');
let resultText = document.getElementById('result');
let playerScore;
let playerLives;

for (let choice of choices) {
    choice.addEventListener('click', function() {
        playerChoice = this.textContent;
        console.log(playerChoice);
        runGame(playerChoice);
    });
}

function runGame(playerChoice) {
    playerChoice.textContent = `Player: ${playerChoice}`; 

    computerChoice.textContent = `Computer: ${computerChoice}`

    resultText.textContent = checkWinner();
}

function computer() {
    let compRandom = Math.floor(Math.random() * 5) + 1;

    switch(compRandom) {
        case 1:
            computer = "Rock";
            break;
        case 1:
            computer = "Paper";
            break;
        case 1:
            computer = "Scissors";
            break;
        case 1:
            computer = "Lizard";
            break;
        case 1:
            computer = "Spock";
            break;
    }
}

