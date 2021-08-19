let playerScore = 0;
let computerScore = 0;

//input div - including choose instructions and rps buttons
const input = document.createElement("div");
input.setAttribute('id', 'input');                              
const choose = document.createElement("p");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

choose.textContent = "Choose one:";
input.appendChild(choose);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
input.appendChild(rockBtn);
input.appendChild(paperBtn);
input.appendChild(scissorsBtn);

rockBtn.addEventListener('click', () => {
    playRound(rockBtn.textContent);
});
paperBtn.addEventListener('click', () => {
    playRound(paperBtn.textContent);
});
scissorsBtn.addEventListener('click', () => {
    playRound(scissorsBtn.textContent);
});


//scoreboard div - title and player/computer scores
const scoreboard = document.createElement('div');
const pscore = document.createElement("p");
const cscore = document.createElement("p");
const scoreTitle = document.createElement("p");
scoreTitle.textContent = "Score:";
scoreboard.appendChild(scoreTitle);
scoreboard.appendChild(pscore);
scoreboard.appendChild(cscore);

//final result card
let resultCard = document.createElement("div");
let finalScore = document.createElement("p");
let result = document.createElement("p");
resultCard.appendChild(result);
resultCard.appendChild(finalScore);

//play again button
let playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play Again";
playAgainBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', () => {
    playAgainBtn.remove();;
});   
playAgainBtn.addEventListener('click', () => {
    resultCard.remove();;
});  

//body and start button
const body = document.querySelector("body");
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', startGame);
startBtn.addEventListener('click', () => {
    startBtn.remove();;
  });


function startGame() {
    playerScore = 0;
    computerScore = 0;

    pscore.textContent = "You: 0";
    cscore.textContent = "Computer: 0"
    
    body.appendChild(scoreboard);

    body.appendChild(input);
}


let computerPlay = () => {
    let hand = Math.floor(Math.random() * 3)
    switch (hand) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
};

let playRound = (player) => {
    computer = computerPlay()

    let result = document.createElement("p");
    let playerSelection = document.createElement("p");
    let computerSelection = document.createElement("p");
    playerSelection.textContent = "You played: " + player;
    computerSelection.textContent = "Computer played: " + computer;

    if (player === computer) {
        result.textContent = ("TIE");
    }
    else {
        switch (player) {
            case "Rock":
                if (computer === "Paper"){
                    result.textContent = ("YOU LOSE");
                    computerScore++;
                }
                else {
                    result.textContent = ("YOU WIN");
                    playerScore++;
                }
                break;
            case "Paper":
                if (computer === "Scissors"){
                    result.textContent = ("YOU LOSE");
                    computerScore++;
                }
                else {
                    result.textContent = ("YOU WIN");
                    playerScore++;
                }
                break;
            case "Scissors":
                if (computer === "Rock"){
                    result.textContent = ("YOU LOSE");
                    computerScore++;
                }
                else {
                    result.textContent = ("YOU WIN");
                    playerScore++;
                }
                break;
        }

        pscore.textContent = "You: " + playerScore;
        cscore.textContent = "Computer: " + computerScore;
    }

    let resultCard = document.createElement("div");
    resultCard.appendChild(playerSelection);
    resultCard.appendChild(computerSelection);
    resultCard.appendChild(result);
    body.appendChild(resultCard);

    sleep(1000).then(() => {
        resultCard.remove();
        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    });
};

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function endGame() {
    input.remove();
    scoreboard.remove();
    
    if (playerScore > computerScore) {
        result.textContent = "YOU WON!"
    }
    else {
        result.textContent = "YOU LOST!";
    }

    finalScore.textContent = "Final Score: " + playerScore + " - " + computerScore;
    
    body.appendChild(resultCard);
    body.appendChild(playAgainBtn);

}