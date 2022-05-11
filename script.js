var playerPoints= 0;
var computerPoints = 0;
var roundNum = 0;

header();
buttons();
footer();

function header() {
 const header = document.getElementById('header');

 const container = document.createElement('div');
 container.classList.add('head-container');
 header.append(container);

 const title = document.createElement('h1');
 title.textContent = "Welcome To Rock Paper Scissors";
 container.append(title);
}

function buttons() {
 const body = document.getElementById('body');

 const round = document.createElement('div');
 round.classList.add('round-container');
 body.append(round);

 const round_num = document.createElement('h1');
 round_num.setAttribute('id', 'round-num');
 round_num.textContent = "Round: 0";
 round.append(round_num);

 const score = document.createElement('div');
 score.classList.add('score-container');
 body.append(score);


 const your_score = document.createElement('p');
 your_score.setAttribute('id', 'your-score');
 const computer_score = document.createElement('p');
 computer_score.setAttribute('id', 'computer-score');
 your_score.textContent = "Your score: 0";
 computer_score.textContent = "Computer's score: 0";
 score.append(your_score);
 score.append(computer_score);

 const container = document.createElement('div');
 container.classList.add('button-container');
 body.append(container);
 
 const your_buttons = document.createElement('div');
 your_buttons.classList.add('your-buttons');
 container.append(your_buttons);

 const computer_buttons = document.createElement('div');
 computer_buttons.classList.add('computer-buttons');
 container.append(computer_buttons);

 for (var i = 0; i < 2; i++) {
  const rock_button = document.createElement('img');
  rock_button.setAttribute('src', './images/rock.JPG');
  your_buttons.append(rock_button);

  const paper_button = document.createElement('img');
  paper_button.setAttribute('src', './images/paper.JPG');
  your_buttons.append(paper_button);

  const scissors_button = document.createElement('img');
  scissors_button.setAttribute('src', './images/scissors.JPG');
  your_buttons.append(scissors_button);

  if (i == 0) {
   rock_button.setAttribute('id', 'rock');
   paper_button.setAttribute('id', 'paper');
   scissors_button.setAttribute('id', 'scissors');
   your_buttons.append(rock_button);
   your_buttons.append(paper_button);
   your_buttons.append(scissors_button);
  }
  else if (i == 1) {
   rock_button.setAttribute('id', 'computer-rock');
   paper_button.setAttribute('id', 'computer-paper');
   scissors_button.setAttribute('id', 'computer-scissors');
   computer_buttons.append(rock_button);
   computer_buttons.append(paper_button);
   computer_buttons.append(scissors_button);
  }
 }
 const result = document.createElement('div');
 result.classList.add('result-container');
 result.setAttribute('id', 'results');
 body.append(result);

 const history = document.createElement('div');
 history.classList.add('history');
 history.setAttribute('id', 'history');
 result.append(history);

 const winner = document.createElement('div');
 winner.classList.add('winner');
 winner.setAttribute('id', 'winner');
 result.append(winner);

}

function footer() {
 const footer = document.getElementById('footer');

 const container = document.createElement('div');
 container.classList.add('footer-container');
 footer.append(container);

 const copyright = document.createElement('p');
 copyright.textContent = '\u00A9 Srivatsan Viswanathan';
 container.append(copyright);
}

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

function computerPlay() {
 let number = Math.random();
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

function decision() {
 playerRock.addEventListener('click', () => selected('rock'));
 playerPaper.addEventListener('click', () => selected('paper'));
 playerScissors.addEventListener('click', () => selected('scissors'));

 function selected(playerSelection) {
  var computerSelection = computerPlay();
  game(playerSelection, computerSelection);
 }

}

function game(player, computer) {

 if (!displayWinner.textContent.includes('Play Again')) {
  computerRock.classList.remove('after');
  computerPaper.classList.remove('after');
  computerScissors.classList.remove('after');
  playerRock.classList.remove('after');
  playerPaper.classList.remove('after');
  playerScissors.classList.remove('after');

  if (computer == 'rock') {
   computerRock.classList.add('after');
  }
  else if (computer == 'paper') {
   computerPaper.classList.add('after');
  }
  else if (computer == 'scissors') {
   computerScissors.classList.add('after');
  }

  if (player == 'rock') {
   playerRock.classList.add('after');
  }
  else if (player == 'paper') {
   playerPaper.classList.add('after');
  }
  else if (player == 'scissors') {
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
 yourScore.textContent ='Your Score: ' + playerPoints;

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
