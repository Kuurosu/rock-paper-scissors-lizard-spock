/**
 * Define variables to be used
 */
let choices = document.getElementsByClassName('choice');
let computerChoice = document.getElementById('computer-choice');
let playerChoice = document.getElementById('player-choice');
let resultText = document.getElementById('result');
let player;
let computer;
let result;
let playerScore = document.getElementById('score');
let playerLives;

for (let choice of choices) {
    choice.addEventListener('click', function() {
        player = this.innerHTML;
        console.log(player);
        runGame(player);
    });
}

function runGame(player) {
    playerChoice.textContent = `You chose: ${player}`; 

    computerRandomNumber();
    computerChoice.textContent = `Computer chose: ${computer}`

    resultText.textContent = checkWinner();
}

function computerRandomNumber() {
    let compRandom = Math.floor(Math.random() * 5) + 1;
    console.log(compRandom);
    switch(compRandom) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
        case 4:
            computer = "Lizard";
            break;
        case 5:
            computer = "Spock";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw! Go again!"
    } else {
        if (player == "Rock") {
            if (computer == "Scissors") {
                ++playerScore;
                return "You Win!"
            }
            else if (computer == "Paper") {
                return "You Lose!"
            }
        }
    }
}