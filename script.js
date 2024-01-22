const MOVES = ["rock", "paper", "scissors"];

let playerPoint = 0;
let computerPoint = 0;

function getComputerChoice() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
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

function updateResult(result) {
  if (playerPoint === 5) {
    displayResult("🏆Player wins the game!🏆");
    return;
  } else if (computerPoint === 5) {
    displayResult("💀Computer wins the game!💀");
    return;
  }

  if (result === 0) {
    displayResult(`A tie! Play again.`);
  } else if (result === true) {
    playerPoint++;
    displayResult(`Player wins!`);
  } else {
    computerPoint++;
    displayResult(`Computer wins!`);
  }
}

function displayResult(message) {
  displayMessage.textContent = message;
}

function updateScore() {
  playerScore.textContent = playerPoint;
  computerScore.textContent = computerPoint;
}

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll("button");
const displayMessage = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    const move = event.target.textContent.toLowerCase();
    let result = playRound(move);
    updateResult(result);
    updateScore();
  })
);

// btnRock.addEventListener("click", (event) => {
//   const move = event.target.textContent.toLowerCase();
//   let result = playRound(move);
//   updateResult(result);
//   updateScore();
// });
