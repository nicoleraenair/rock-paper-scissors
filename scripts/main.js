let computerPlay = () => {
    let hand = Math.floor(Math.random() * 3)
    switch (hand) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
};

let playRound = (player) => {
    player = player.toLowerCase()
    computer = computerPlay()
    console.log("You played: " + player)
    console.log("Computer played: " + computer)

    if (player === computer) {
        return "TIE"
    }

    switch (player) {
        case "rock":
            if (computer === "paper"){
                return "YOU LOSE"
            }
            else {
                return "YOU WIN"
            }
        case "paper":
            if (computer === "scissors"){
                return "YOU LOSE"
            }
            else {
                return "YOU WIN"
            }
        case "scissors":
            if (computer === "rock"){
                return "YOU LOSE"
            }
            else {
                return "YOU WIN"
            }
    }
};

let game = () => {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++){
        let player = window.prompt("Rock, Paper, or Scissors? ")
        let result = playRound(player)
        console.log(result)
        if (result === "YOU WIN") {
            playerScore++
        }
        else if (result === "YOU LOSE") {
            computerScore++
        }
    }

    console.log("FINAL RESULT: ")
    if (playerScore === computerScore) {
        console.log("TIE!")
    }
    else if (playerScore > computerScore){
        console.log("YOU WON!")
    }
    else {
        console.log("YOU LOST!")
    }
    console.log("Final Score: " + playerScore + " - " + computerScore)
};