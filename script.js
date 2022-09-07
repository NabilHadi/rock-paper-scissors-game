const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "draw";
    } else if (computerChoice === "paper") {
      return "lose";
    } else if (computerChoice === "scissors") {
      return "win";
    } else {
      return (
        "Error computerChoice: " +
        computerChoice +
        ", playerChoice: " +
        playerChoice
      );
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "win";
    } else if (computerChoice === "paper") {
      return "draw";
    } else if (computerChoice === "scissors") {
      return "lose";
    } else {
      return (
        "Error computerChoice: " +
        computerChoice +
        ", playerChoice: " +
        playerChoice
      );
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "lose";
    } else if (computerChoice === "paper") {
      return "win";
    } else if (computerChoice === "scissors") {
      return "draw";
    } else {
      return (
        "Error computerChoice: " +
        computerChoice +
        ", playerChoice: " +
        playerChoice
      );
    }
  } else {
    return (
      "Error computerChoice: " +
      computerChoice +
      ", playerChoice: " +
      playerChoice
    );
  }
}

const resultDiv = document.querySelector("#result");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

function onButtonClick(e) {
  const playerSelection = e.target.getAttribute("data-selection");
  if (!playerSelection) return;
  const computerSelection = getComputerChoice();

  const result = playRound(playerSelection, computerSelection);
  let msg = "";

  if (result === "draw") {
    msg = "It's a draw!";
  } else if (result === "win") {
    msg = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (result === "lose") {
    msg = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    msg = "Error";
  }

  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;
  if (playerScore >= 5) {
    resultDiv.textContent = "Congrats! You won the game!";
    removeButtonListeners();
  } else if (computerScore >= 5) {
    resultDiv.textContent = "Oops! You lost the game! better luck next time";
    removeButtonListeners();
  } else {
    resultDiv.textContent = msg;
  }
}

function removeButtonListeners() {
  rockButton.removeEventListener("click", onButtonClick);
  paperButton.removeEventListener("click", onButtonClick);
  scissorsButton.removeEventListener("click", onButtonClick);
}

rockButton.addEventListener("click", onButtonClick);
paperButton.addEventListener("click", onButtonClick);
scissorsButton.addEventListener("click", onButtonClick);
