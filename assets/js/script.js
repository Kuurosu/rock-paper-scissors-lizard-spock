/**
 * Define variables to be used
 */
let choices = document.getElementsByClassName('choice');
let computerChoice = document.getElementById('computer-choice');
let playerChoice = document.getElementById('player-choice');
let resultText = document.getElementById('result');
let player;
let computer;
let playerScore = 0;
let playerLives;

for (let choice of choices) {
    choice.addEventListener('click', function() {
        player = this.innerHTML;
        console.log(player);
        runGame(player);
    });
};

function runGame(player) {
    playerChoice.textContent = `You chose: ${player}`; 

    computerRandomNumber();
    computerChoice.textContent = `Computer chose: ${computer}`;

    resultText.textContent = checkWinner();

    document.getElementById('score').innerHTML = playerScore;
};

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
    };
};

function checkWinner() {
    if (player == computer) {
        return "Draw! Go again!";
    } else if (player == "Rock") {
        if (computer == "Scissors") {
            playerScore += 1;
            return "You Win! Rock crushes Scissors!";
        }
        else if (computer == "Paper") {
            return "You Lose! Paper covers Rock!";
        }
        else if (computer == "Lizard") {
            playerScore += 1;
            return "You Win! Rock crushes Lizard!";
        }
        else if (computer == "Spock") {
            return "You Lose! Spock vaporises Rock";
        }
    } else if (player == "Scissors") {
        if (computer == "Rock") {
            return "You Lose! Rock crushes Scissors!";
        }
        else if (computer == "Paper") {
            playerScore += 1;
            return "You Win! Scissors cuts Paper!";
        }
        else if (computer == "Lizard") {
            playerScore += 1;
            return "You Win! Scissors decapitates Lizard!";
        }
        else if (computer == "Spock") {
            return "You Lose! Spock smashes Scissors!";
        }
    }
};