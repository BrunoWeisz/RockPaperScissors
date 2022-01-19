const rockButtonNode = document.querySelector("#rock");
const paperButtonNode = document.querySelector("#paper");
const scissorsButtonNode = document.querySelector("#scissors");

const resultParagraphNode = document.querySelector("#resultText");
const scoreParagraphNode = document.querySelector("#scoreText");
const endGameParagraphNode = document.querySelector("#endGame");

//-----------//

rockButtonNode.addEventListener("click", playerMovedWithClick);
paperButtonNode.addEventListener("click", playerMovedWithClick);
scissorsButtonNode.addEventListener("click", playerMovedWithClick);

function playerMovedWithClick(ev){
    if (gameFinished) return

    let roundResult = roundFromPlayer(ev.target.getAttribute("id"));
    resultParagraphNode.textContent = roundResult[1];
    if (roundResult[0] == 2) playerScore++;
    else if (roundResult[0] == 0) computerScore++;
    else if (roundResult[0] == 1) {
        computerScore++;
        playerScore++;
    
    }

    updateVisibleResult(playerScore, computerScore);

    if (playerScore == 5 || computerScore == 5){
        let winner = "";
        if (playerScore+computerScore == 10) winner = "Both";
        else if (playerScore == 5) winner = "You";
        else winner = "Computer";
        endGame(winner);
    } 
}

function updateVisibleResult(playerPoints, computerPoints){
    scoreParagraphNode.textContent = `Player: ${playerPoints} - Computer: ${computerPoints}`;
}

function endGame(winner){
    gameFinished = true;
    endGameParagraphNode.textContent = `${winner} wins!`;
}
