var playerPoints= 0;
var computerPoints = 0;
var roundNum = 0;

const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');

const historyText = document.getElementById('history');
const displayWinner = document.getElementById('winner');

const yourScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');
const round = document.getElementById('round-num');

decision();

function decision() {
    playerRock.addEventListener('click', () => selected('rock'));
    playerPaper.addEventListener('click', () => selected('paper'));
    playerScissors.addEventListener('click', () => selected('scissors'));

    function selected(playerSelection) {
        var computerSelection = computerPlay();
        game(playerSelection, computerSelection);
    }
}

function computerPlay() {
    var number = Math.random();
    if (number <= 1 / 3) {
        hand = "rock";
    }
    else if (number <= 2 / 3) {
        hand = "paper";
    }
    else {
        hand = "scissors";
    }
    return hand;
}

function game(player, computer) {
    if (!displayWinner.textContent.includes('Play Again')) {
        computerRock.classList.remove('after');
        computerPaper.classList.remove('after');
        computerScissors.classList.remove('after');
        playerRock.classList.remove('after');
        playerPaper.classList.remove('after');
        playerScissors.classList.remove('after');

        if (computer === 'rock') {
            computerRock.classList.add('after');
        }
        else if (computer === 'paper') {
            computerPaper.classList.add('after');
        }
        else if (computer === 'scissors') {
            computerScissors.classList.add('after');
        }

        if (player === 'rock') {
            playerRock.classList.add('after');
        }
        else if (player === 'paper') {
            playerPaper.classList.add('after');
        }
        else if (player === 'scissors') {
            playerScissors.classList.add('after');
        }
    }

    if (playerPoints >= 5 && playerPoints > computerPoints) {
        endgame('player');
    }

    else if (computerPoints >= 5 && computerPoints > playerPoints) {
        endgame('computer');
    }

    else if (player == computer) {
        playerPoints = playerPoints;
        computerPoints = computerPoints;
        roundNum = roundNum + 1;
        historyText.textContent = 'Round ' + roundNum + ": It's a tie!";
    }

    else if (player == 'rock' && computer == 'scissors' || player == 'paper' && computer == 'rock'
        || player == 'scissors' && computer == 'paper') {
        playerPoints = playerPoints + 1;
        roundNum = roundNum + 1;
        historyText.textContent = 'Round ' + roundNum + ": Player Wins!";
    }
    else if (player == 'rock' && computer == 'paper' || player == 'paper' && computer == 'scissors'
        || player == 'scissors' && computer == 'rock') {
        computerPoints = computerPoints + 1;
        roundNum = roundNum + 1;
        historyText.textContent = 'Round ' + roundNum + ": Computer Wins!";
    }

    var yourScore = document.getElementById('your-score');
    yourScore.textContent = 'Your Score: ' + playerPoints;

    var computerScore = document.getElementById('computer-score');
    computerScore.textContent = "Computer's Score: " + computerPoints;

    var round = document.getElementById('round-num');
    round.textContent = 'Round: ' + roundNum;

    if (playerPoints >= 5 && playerPoints > computerPoints) {
        endgame('player');
    }

    else if (computerPoints >= 5 && computerPoints > playerPoints) {
        endgame('computer');
    }
}

function endgame(winner) {
 const playAgain = document.createElement('button');
 playAgain.setAttribute('id', 'play-again');
 playAgain.textContent = "Play Again";

 if (!displayWinner.textContent.includes('Computer Wins') && winner == 'computer') {
  const winner = document.createElement('p');
  winner.textContent = "Computer Wins!";
  displayWinner.classList.add('computer');
  displayWinner.append(winner);
  displayWinner.append(playAgain);
 }
 else if (!displayWinner.textContent.includes('Player Wins') && winner == 'player') {
  const winnerText = document.createElement('p');
  winnerText.textContent = "Player Wins!";
  displayWinner.classList.add('player');
  displayWinner.append(winnerText);
  displayWinner.append(playAgain);
 }

 playAgain.addEventListener('click', () => {
  const refresh = document.getElementById('play-again');
  yourScore.textContent = 'Your Score: 0';
  computerScore.textContent = "Computer's Score: 0";
  round.textContent = 'Round: 0';
  refresh.textContent = "";
  displayWinner.textContent = "";
  historyText.textContent = "";

  playerPoints = 0;
  computerPoints = 0;
  roundNum = 0;
  
  computerRock.classList.remove('after');
  computerPaper.classList.remove('after');
  computerScissors.classList.remove('after');
  playerRock.classList.remove('after');
  playerPaper.classList.remove('after');
  playerScissors.classList.remove('after');

  displayWinner.classList.remove('player');
  displayWinner.classList.remove('computer');
 });
}
