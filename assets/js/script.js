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
let playerLives = 3;

/**
 * Event Listener to listen for which button gets clicked. Then runs the game.
 */
for (let choice of choices) {
    choice.addEventListener('click', function() {
        player = this.innerHTML;
        console.log(player);
        runGame(player);
    });
};


/**
 * This takes the player from the event listener and assigns it to the function.
 * It also runs the computerRandomNumber function to find a random number between 1-5 in which it switches to assign a string to the computer variable.
 * It then runs the checkWinner function to see who won the game. It will also add + 1 to increment the score with the id of 'score' and decrement the playerLives - 1.
 * 
 * 
 * @param {} player 
 */

function runGame(player) {
    playerChoice.textContent = `You chose: ${player}`; 

    computerRandomNumber();
    computerChoice.textContent = `Computer chose: ${computer}`;

    resultText.textContent = checkWinner();

    document.getElementById('score').innerHTML = playerScore;
    document.getElementById('lives').innerHTML = playerLives;
};

/**
 * This creates the random 1-5 and uses switch to assign it the string of choice.
 */
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

/**
 * This checks the playerChoice to computerChoice and finds out which one won and if the score should be incremented or lives be decremented
 * @returns result
 */
function checkWinner() {
    if (player == computer) {
        return "Draw! Go again!";
    } else if (player == "Rock") {
        if (computer == "Scissors") {
            playerScore += 1;
            return "You Win! Rock crushes Scissors!";
        }
        else if (computer == "Paper") {
            playerLives -= 1;
            return "You Lose! Paper covers Rock!";
        }
        else if (computer == "Lizard") {
            playerScore += 1;
            return "You Win! Rock crushes Lizard!";
        }
        else if (computer == "Spock") {
            playerLives -= 1;
            return "You Lose! Spock vaporises Rock";
        }
    } else if (player == "Scissors") {
        if (computer == "Rock") {
            playerLives -= 1;
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
            playerLives -= 1;
            return "You Lose! Spock smashes Scissors!";
        }
    }
};