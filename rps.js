let playerScore = 0;
let computerScore = 0;

let gameFinished = false;


/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let pm = prompt("Ingrese su jugada:");
        let cm = computerPlay();
        roundResult = round(pm, cm);
        if (roundResult[0] == 2) playerScore++;
        else if (roundResult[0] == 0) computerScore++;
        else if (roundResult[0] == 1) {
            computerScore++;
            playerScore++;
        }
        console.log(roundResult[1] + `, score is ${playerScore} to ${computerScore}`);
        updateResult(playerScore, computerScore);
    }
    let gameResult = "";
    if (computerScore > playerScore){
        gameResult = "Perdiste";
    } else if (computerScore < playerScore){
        gameResult = "Ganaste";
    } else {
        gameResult = "Es un empate";
    }
    return gameResult;
}*/

function computerPlay(){
    let move = Math.floor(Math.random()*3)
    let possibleMoves = ["rock", "paper", "scissors"]
    return possibleMoves[move];
}

function roundFromPlayer(playerMove){
    return round(playerMove, computerPlay())
}

function round(playerMove, computerMove){
    let result = "";
    playerMove = playerMove.toLowerCase();
    
    if (playerMove == "rock"){
        if (computerMove == "rock"){
            result = "Tie";
        } else if (computerMove == "paper"){
            result = "Lose";
        } else {
            result = "Win";
        }
    } else if (playerMove == "paper"){
        if (computerMove == "rock"){
            result = "Win";
        } else if (computerMove == "paper"){
            result = "Tie";
        } else {
            result = "Lose";
        }
    } else if (playerMove == "scissors"){
        if (computerMove == "rock"){
            result = "Lose";
        } else if (computerMove == "paper"){
            result = "Win";
        } else {
            result = "Tie";
        }
    } 

    let logs = {"Win": [2, `You win! ${playerMove} beats ${computerMove}`],
                "Tie": [1, `It\'s a tie: ${playerMove} ties ${computerMove}`],
                "Lose": [0, `You lose: ${playerMove} loses against ${computerMove}`]}

    console.log(logs[result]);
    return logs[result];
    
}

