function computerPlay() {
    let number = Math.random();
    if (number <= 1/3) {
        hand = "rock";
    }
    else if (number <= 2/3) {
        hand = "paper";
    }
    else {
        hand = "scissors";
    }
    return hand;
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    player_display = player.slice(0,1).toUpperCase() + player.slice(1, player.length);
    computer_display = computer.slice(0,1).toUpperCase() + computer.slice(1, computer.length)

    let winner = "You win! " + player_display + " beats " + computer;
    let loser = "You lose! " + computer_display + " beats " + player;
    let tie = "It's a tie! You both picked " + player;

    if (playerSelection == computerSelection) {
        console.log(tie);
        return 2;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log(loser);
            return 0;
        }
        else {
            console.log(winner);
            return 1;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log(loser);
            return 0;
        }
        else {
            console.log(winner);
            return 1;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log(loser);
            return 0;
        }
        else {
            console.log(winner);
            return 1;
        }
    }
}


function game() {
    player_points = 0;
    computer_points = 0;
    round = 0;


    while (player_points < 3 && computer_points < 3) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        console.log("Round: " + round);
        round = round + 1;
        result = playRound(playerSelection, computerSelection);
        if (result == 0) {
            computer_points = computer_points + 1;
        }
        else if (result == 1) {
            player_points = player_points + 1;
        }
        else if (result == 2) {
            player_points = player_points;
            computer_points = computer_points;
        }
        console.log("Player points: " + player_points);
        console.log("Computer Points: " + computer_points);
    }

    if (player_points == 3) {
        return "Player won!"
    }

    if (computer_points == 3) {
        return "Computer won!"
    }

}
console.log(game());
