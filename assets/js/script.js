/**
 * Define variables to be used
 */
const choices = document.getElementsByClassName('choice');
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultText = document.getElementById('result');
let player;
let playerScore = 0;
let playerLives = 3;

/**
 * Event Listener to listen for which button gets clicked. Then runs the game.
 */
for (let choice of choices) {
    choice.addEventListener('click', function() {
        player = this.innerHTML;
        console.log(player);
        displayResult(playerChoice);
    });
}

/**
 * This takes the player from the event listener and assigns it to the function.
 * It also runs the computerRandomNumber function to find a random number between 1-5 in which it switches to assign a string to the computer variable.
 * It then runs the checkWinner function to see who won the game. It will also add + 1 to increment the score with the id of 'score' and decrement the playerLives - 1.
 * 
 * 
 * @param {} player 
 */

function displayResult(playerChoice) {
    // playerChoice.textContent = `You chose: ${player}`;
    let playerImg = document.createElement('img');
    playerImg.src = 'assets/images/' + player.toLowerCase() + '.png';
    playerImg.setAttribute('id', 'current-image');
    playerChoice.innerHTML = '';
    playerChoice.appendChild(playerImg);

    let computerCount = getComputerCharacter();
    computerChoice.textContent = `Computer chose: ${computerCount}`;

    resultText.textContent = checkWinner(player, computerCount);

    document.getElementById('score').innerHTML = playerScore;
    document.getElementById('lives').innerHTML = playerLives;

    if (playerLives < 1) {
        gameOver();
    }
}

/**
 * This creates the random 1-5 and uses switch to assign it the string of choice.
 */
function getComputerCharacter() {
    let compRandom = Math.floor(Math.random() * 5) + 1;
    console.log(compRandom);
    let computerChoice;
    switch(compRandom) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
        case 4:
            computerChoice = 'Lizard';
            break;
        case 5:
            computerChoice = 'Spock';
            break;
    }

    return computerChoice;
}

/**
 * This checks the playerChoice to computerChoice and finds out which one won and if the score should be incremented or lives be decremented
 * @returns result
 */
function checkWinner(player, computerCount) {
    if (player == computerCount) {
        return 'Draw! Go again!';
    } else if (player == 'Rock') {
        if (computerCount == 'Scissors') {
            playerScore += 1;
            return 'You Win! Rock crushes Scissors!';
        }
        else if (computerCount == 'Paper') {
            playerLives -= 1;
            return 'You Lose! Paper covers Rock!';
        }
        else if (computerCount == 'Lizard') {
            playerScore += 1;
            return 'You Win! Rock crushes Lizard!';
        }
        else if (computerCount == 'Spock') {
            playerLives -= 1;
            return 'You Lose! Spock vaporises Rock';
        }
    } else if (player == 'Scissors') {
        if (computerCount == 'Rock') {
            playerLives -= 1;
            return 'You Lose! Rock crushes Scissors!';
        }
        else if (computerCount == 'Paper') {
            playerScore += 1;
            return 'You Win! Scissors cuts Paper!';
        }
        else if (computerCount == 'Lizard') {
            playerScore += 1;
            return 'You Win! Scissors decapitates Lizard!';
        }
        else if (computerCount == 'Spock') {
            playerLives -= 1;
            return 'You Lose! Spock smashes Scissors!';
        }
    } else if (player == 'Paper') {
        if (computerCount == 'Rock') {
            playerScore += 1;
            return 'You Win! Paper covers Rock!';
        }
        else if (computerCount == 'Scissors') {
            playerLives -= 1;
            return 'You Lose! Scissors cut Paper!';
        }
        else if (computerCount == 'Lizard') {
            playerLives -= 1;
            return 'You Lose! Lizard eats Paper!';
        }
        else if (computerCount == 'Spock') {
            playerScore += 1;
            return 'You Win! Paper dispoves Spock!';
        }
    } else if (player == 'Lizard') {
        if (computerCount == 'Rock') {
            playerLives -= 1;
            return 'You Lose! Rock crushes Lizard!';
        }
        else if (computerCount == 'Paper') {
            playerScore += 1;
            return 'You Win! Lizard eats Paper!';
        }
        else if (computerCount == 'Scissors') {
            playerLives -= 1;
            return 'You Lose! Scissors decapitate Lizard!';
        }
        else if (computerCount == 'Spock') {
            playerScore += 1;
            return 'You Win! Lizard poisons Spock!';
        }
    } else if (player == 'Spock') {
        if (computerCount == 'Rock') {
            playerScore += 1;
            return 'You Win! Spock vaporises Rock!';
        }
        else if (computerCount == 'Paper') {
            playerLives -= 1;
            return 'You Lose! Paper disproves Spock!';
        }
        else if (computerCount == 'Scissors') {
            playerScore += 1;
            return 'You Win! Spock smashes Scissors!';
        }
        else if (computerCount == 'Lizard') {
            playerLives -= 1;
            return 'You Lose! Lizard poisons Spock!';
        }
    }
}

/**
 * Disables all the button input. Effectively pausing the game unless the resetChoices is run.
 */
function gameOver() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('lizard').disabled = true;
    document.getElementById('spock').disabled = true;

    document.getElementById('start').innerHTML = 'Game Over! You ran out of lives!';
    document.getElementById('rules').innerHTML = `Your final score is: ${playerScore}!`;

    resetChoices();
}

/**
 * Creates a Play Again button which also replaces the instructions above the buttons.
 */
function resetChoices() {
    let reset = document.createElement('button');
    reset.setAttribute('id', 'reset');
    let resetText = document.createTextNode('Play Again?');
    reset.appendChild(resetText);
    let section = document.getElementById('reset-func');
    section.appendChild(reset);
    let resetbtn = document.getElementById('reset');
    resetbtn.addEventListener('click', function(){
        document.getElementById('start').innerHTML = 'Click one of the images to make a choice!';
        document.getElementById('rules').innerHTML = 'For full rules see below the game area';

        document.getElementById('reset').remove();

        resetGame();
    });
}

/**
 * Resets the lives back to 3 and score to 0. Also re-enables all the buttons.
 */
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

    document.getElementById('player-choice').innerHTML = '';
    document.getElementById('computer-choice').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}


