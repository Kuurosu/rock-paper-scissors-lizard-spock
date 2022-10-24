window.onload = onLoad();

function onLoad() {
    let start = document.getElementById('start');
    let rule = document.getElementById('rules');

    start.innerHTML = "Click one of the images to make a choice!";
    rule.innerHTML = "For full rules see below the game area"
};

let choice = document.getElementsByClassName('choice');
for (let choices of choice) {
    choices.addEventListener('click', function() {
        let playerChoice = this.id;
        console.log(playerChoice);
    })
}
