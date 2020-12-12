let playerScore = 0;
let computerScore = 0;

const playerScoreBox = document.getElementById('player-score');
const computerScoreBox = document.getElementById('computer-score');
const resultsOutputElement = document.getElementById('results-output-display');
const replayButtonElement = document.getElementById('replay-button');

// function that will randomly return 'rock', 'paper' or 'scissors'\
function computerPlay(){
    let choices = ["PAPER", "SCISSORS", "ROCK"]; // arrays should always be plural because they are a collection of elements
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]; // Math.floor is used to round down. Math.ceiling is used to round up. Math.round is used to round to the nearest.
    return randomChoice;
}

// function that plays a single round
function playRound(playerSelection){
    playerSelection = playerSelection.toUpperCase(); // this is so any capitalisation of 'choices' can be read
    let computerSelection = computerPlay();

    let p = 'PAPER';
    let s = 'SCISSORS';
    let r = 'ROCK';

    if (!isGameOver()){
        // return string that declares winner of round
        if ((playerSelection == r && computerSelection == s) || (playerSelection == p && computerSelection == r) || (playerSelection == s && computerSelection == p)) {
            updateResultsDisplay("You win! " + playerSelection + " beats " + computerSelection + ". +1 point for the Player.");
            playerScore++;   
        } else if ((playerSelection == r && computerSelection == p) || (playerSelection == p && computerSelection == s) || (playerSelection == s && computerSelection == r)) {
            updateResultsDisplay("You lose! " + computerSelection + " beats " + playerSelection + ". +1 point for the Computer.");
            computerScore++;
        } else if ((playerSelection == s && computerSelection == s) || (playerSelection == r && computerSelection == r) || (playerSelection == p && computerSelection == p)) {
            updateResultsDisplay("It's a draw! No one gets a point.");
        } else {
            updateResultsDisplay("Invalid move.");
        }

        if (playerScore >= 3){
            updateResultsDisplay("You beat the system! Congrats!");
            replayButtonElement.style.display = "inline-block";

        } else if (computerScore >= 3){
            updateResultsDisplay("You lost. The computer wins!");
            replayButtonElement.style.display = "inline-block";

        }
    }
    
    updateScoreDisplay();
}

// Updates score display
function updateScoreDisplay(){
    playerScoreBox.innerHTML = playerScore; // changes the html score by setting it to the score variable
    computerScoreBox.innerHTML = computerScore;
}

// Prints the results on webpage
function updateResultsDisplay(text){
    resultsOutputElement.innerHTML = text;
}

// Checks if the set game score has been reached
function isGameOver(){
    return (playerScore >= 3 || computerScore >= 3); // use instead of 'if(){true} else {false}'. 
}

// Refresh page when 'Play Again' button is pressed
function refreshPage(){
    window.location.reload();
} 