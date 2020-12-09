let playerScore = 0;
let computerScore = 0;

const playerScoreBox = document.getElementById('player-score');
const computerScoreBox = document.getElementById('computer-score');
// console.log(computerScoreBox) // log score box
// console.log(document); // see HTML in console

// function that will randomly return 'rock', 'paper' or 'scissors'\
function computerPlay(){
    let choices = ["paper", "scissors", "rock"]; // arrays should always be plural because they are a collection of elements
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]; // Math.floor is used to round down. Math.ceiling is used to round up. Math.round is used to round to the nearest.
    return randomChoice;
}

// function that plays a single round
function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase(); // this is so any capitalisation of 'choices' can be read
    let computerSelection = computerPlay();

    let p = 'paper';
    let s = 'scissors';
    let r = 'rock';

    if (!isGameOver()){
        // return string that declares winner of round
        if ((playerSelection == r && computerSelection == s) || (playerSelection == p && computerSelection == r) || (playerSelection == s && computerSelection == p)) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerScore++;   
        } 
        
        else if ((playerSelection == r && computerSelection == p) || (playerSelection == p && computerSelection == s) || (playerSelection == s && computerSelection == r)) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore++;
        } 
        
        else if ((playerSelection == s && computerSelection == s) || (playerSelection == r && computerSelection == r) || (playerSelection == p && computerSelection == p)) {
            console.log("It's a draw!");
        } 
        
        else {
            console.log("Invalid move.");
        }
    }
    
    updateScoreDisplay();
}

// function which updates score display
function updateScoreDisplay(){
    playerScoreBox.innerHTML = playerScore; // changes the html score by setting it to the score variable
    computerScoreBox.innerHTML = computerScore;
}

function isGameOver(){
    return (playerScore >= 3 || computerScore >= 3); // use instead of 'if(){true} else {false}'. 
}