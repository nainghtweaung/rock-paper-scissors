const MOVES = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
const rounds = 5;

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

function game() {
  let result;
  // Play given number of rounds
  for (let i = 0; i < rounds; i++) {
    if (playerScore > rounds / 2 || computerScore > rounds / 2) {
      break;
    }

    let playerSelection;
    while (playerSelection === undefined) {
      playerSelection = prompt("Make a move!");

      // Check if player input is valid
      if (!MOVES.includes(playerSelection.toLowerCase())) {
        alert("Please enter a valid move.");
        playerSelection = undefined;
      }
    }
    const computerSelection = getComputerChoice();

    console.log("Player's move: " + playerSelection);
    console.log("Computer's move: " + computerSelection);

    result = playRound(playerSelection, computerSelection);
    if (result === 0) {
      console.log(`Round ${i + 1}: A tie! Play again.\n`);
      console.log("");
      i--;
    } else if (result === true) {
      playerScore++;
      console.log(`Round ${i + 1}: Player wins!`);
      console.log("");
    } else {
      computerScore++;
      console.log(`Round ${i + 1}: Computer wins!`);
      console.log("");
    }
  }

  if (playerScore > computerScore) {
    console.log("🏆Player wins the game!🏆");
  } else if (playerScore < computerScore) {
    console.log("💀Computer wins the game!💀");
  } else {
    console.log("The game is a tie!");
  }
}

game();

console.log(playerScore);
console.log(computerScore);
