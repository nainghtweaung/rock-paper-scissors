const MOVES = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
const rounds = 3;

function getComputerChoice() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function playRound(playerSelection, computerSelection) {
  let playerMove = MOVES.indexOf(playerSelection.toLowerCase());
  let computerMove = MOVES.indexOf(computerSelection.toLowerCase());

  switch (playerMove - computerMove) {
    case 0:
      // A tie
      return 0;
    case -1:
    case 2:
      // player loses
      return false;
    case 1:
    case -2:
      // player wins
      return true;
  }
}

function game(round) {
  const playerSelection = prompt("Make a move!");
  console.log("Player's move: " + playerSelection);
  const computerSelection = getComputerChoice();
  console.log("Computer's move: " + computerSelection);

  const result = playRound(playerSelection, computerSelection);

  if (result === 0) {
    console.log("ties");
  } else if (result === true) {
    playerScore++;
    console.log(`Player wins round ${round}!`);
  } else {
    computerScore++;
    console.log(`Computer wins round ${round}!`);
  }
}

console.log(playerScore);
console.log(computerScore);
