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

    if (playerLives < 1) {
        gameOver();
    }
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
    } else if (player == "Paper") {
        if (computer == "Rock") {
            playerScore += 1;
            return "You Win! Paper covers Rock!";
        }
        else if (computer == "Scissors") {
            playerLives -= 1;
            return "You Lose! Scissors cut Paper!";
        }
        else if (computer == "Lizard") {
            playerLives -= 1;
            return "You Lose! Lizard eats Paper!";
        }
        else if (computer == "Spock") {
            playerScore += 1;
            return "You Win! Paper dispoves Spock!";
        }
    } else if (player == "Lizard") {
        if (computer == "Rock") {
            playerLives -= 1;
            return "You Lose! Rock crushes Lizard!";
        }
        else if (computer == "Paper") {
            playerScore += 1;
            return "You Win! Lizard eats Paper!";
        }
        else if (computer == "Scissors") {
            playerLives -= 1;
            return "You Lose! Scissors decapitate Lizard!";
        }
        else if (computer == "Spock") {
            playerScore += 1;
            return "You Win! Lizard poisons Spock!";
        }
    } else if (player == "Spock") {
        if (computer == "Rock") {
            playerScore += 1;
            return "You Win! Spock vaporises Rock!";
        }
        else if (computer == "Paper") {
            playerLives -= 1;
            return "You Lose! Paper disproves Spock!";
        }
        else if (computer == "Scissors") {
            playerScore += 1;
            return "You Win! Spock smashes Scissors!";
        }
        else if (computer == "Lizard") {
            playerLives -= 1;
            return "You Lose! Lizard poisons Spock!";
        }
    }
};

function gameOver() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('lizard').disabled = true;
    document.getElementById('spock').disabled = true;

    document.getElementById('start').innerHTML = "Game Over! You ran out of lives!";
    document.getElementById('rules').innerHTML = `Your final score is: ${playerScore}!`;

    resetChoices();
};

function resetChoices() {
    let reset = document.createElement('button');
    reset.setAttribute("id", "reset");
    let resetText = document.createTextNode("Play Again?");
    reset.appendChild(resetText);
    let section = document.getElementById('reset-func');
    section.appendChild(reset);
    let resetbtn = document.getElementById('reset');
    resetbtn.addEventListener('click', function(){
        document.getElementById('start').innerHTML = "Click one of the images to make a choice!";
        document.getElementById('rules').innerHTML = "For full rules see below the game area";

        document.getElementById('reset').remove();

        resetGame();
    });
};

function resetGame() {
    playerLives = 3;
    document.getElementById('lives').innerHTML = 3;
    playerScore = 0;
    document.getElementById('score').innerHTML = 0;

    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = 
    false;
    document.getElementById('lizard').disabled = false;
    document.getElementById('spock').disabled = false;

    document.getElementById('player-choice').innerHTML = "";
    document.getElementById('computer-choice').innerHTML = "";
    document.getElementById('result').innerHTML = "";
}


