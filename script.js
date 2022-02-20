symbols = ["ROCK", "PAPER", "SCISSORS"];


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let container = document.querySelector("#container");
let winner = document.querySelector("#winner");
let announcer = document.querySelector("#announcer");
let score = document.querySelector("#score");
let reset = document.querySelector("#reset");
let restart = document.querySelector("#restart");

rock.addEventListener("click", function (e) {
    playRound(e.target.value)
});

paper.addEventListener("click", function (e) {
    playRound(e.target.value)
});

scissors.addEventListener("click", function (e) {
    playRound(e.target.value)
});

restart.addEventListener("click", resetGame);

let playerScore = 0;
let computerScore = 0;

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`
    announcer.innerText = "Rock, paper, scissors!";
    winner.innerText = "";
    reset.classList.toggle("hidden");
    rock.classList.toggle("disabled");
    paper.classList.toggle("disabled");
    scissors.classList.toggle("disabled");
}

function gameEnd() {
    reset.classList.toggle("hidden");
    rock.classList.toggle("disabled");
    paper.classList.toggle("disabled");
    scissors.classList.toggle("disabled");
}

function computerPlay() {
    return symbols[Math.floor(Math.random() * 3)];
}

function checkScore() {

    if (playerScore === 5) {
        winner.innerText = "Player wins round of 5!";
        gameEnd();
    } else if (computerScore === 5) {
        winner.innerText = "Computer wins round of 5!";
        gameEnd();
    }

}

function playRound(playerSelection) {

    let computerSelection = computerPlay();
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "ROCK") {
                return announcer.innerText = "Rock vs Rock. Tie.";
            } else if (computerSelection === "PAPER") {
                computerScore++
                score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`
                checkScore();
                return announcer.innerText = "Rock vs Paper. You lose!"
            } else {
                playerScore++
                score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`
                checkScore();
                return announcer.innerText = "Rock vs Scissors. You win!";
            }
        case "PAPER":
            if (computerSelection === "ROCK") {
                playerScore++
                score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`
                checkScore();
                return announcer.innerText = "Paper vs Rock. You win!";
            } else if (computerSelection === "PAPER") {
                return announcer.innerText = "Paper vs Paper. Tie.";
            } else {
                computerScore++
                score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`
                checkScore();
                return announcer.innerText = "Paper vs Scissors. You lose!";
            }
        case "SCISSORS":
            if (computerSelection === "ROCK") {
                computerScore++
                score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`;
                checkScore();
                return announcer.innerText = "Scissors vs Rock. You lose!";
            } else if (computerSelection === "PAPER") {
                playerScore++
                score.innerText = `Score (Player - PC): ${playerScore} - ${computerScore}`
                checkScore();
                return announcer.innerText = "Scissors vs Paper. You win!";
            } else {
                return announcer.innerText = "Scissors vs Scissors. Tie.";
            }
    }
}