function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "It is a Draw!";
    } else if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "Error: Unknown Computer selection";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper") {
      return "It is a Draw!";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "Error: Unknown Computer selection";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return "It is a Draw!";
    } else {
      return "Error: Unknown Computer selection";
    }
  } else {
    return "Error: Unknown Player selection";
  }
}

const containerDiv = document.querySelector(".container");

const displayDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const resultDiv = document.createElement("div");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const resetButton = document.createElement("button");

let playerScore = 0;
let computerScore = 0;

displayDiv.setAttribute("id", "displayDiv");
scoreDiv.setAttribute("id", "scoreDiv");
resultDiv.setAttribute("id", "resultDiv");

rockButton.setAttribute("id", "rockButton");
paperButton.setAttribute("id", "paperButton");
scissorsButton.setAttribute("id", "scissorsButton");
resetButton.setAttribute("id", "resetButton");

rockButton.setAttribute("data-selection", "rock");
paperButton.setAttribute("data-selection", "paper");
scissorsButton.setAttribute("data-selection", "scissors");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
resetButton.textContent = "Reset";

rockButton.addEventListener("click", selectionButtonClickHandler);
paperButton.addEventListener("click", selectionButtonClickHandler);
scissorsButton.addEventListener("click", selectionButtonClickHandler);
resetButton.addEventListener("click", resetButtonClickHandler);

containerDiv.appendChild(displayDiv);
containerDiv.appendChild(rockButton);
containerDiv.appendChild(paperButton);
containerDiv.appendChild(scissorsButton);
containerDiv.appendChild(resetButton);

displayDiv.appendChild(resultDiv);
displayDiv.appendChild(scoreDiv);

function selectionButtonClickHandler(ev) {
  const selection = ev.target.getAttribute("data-selection");
  if (!selection) return;

  const result = playRound(getComputerChoice(), selection);
  resultDiv.textContent = result;
  if (result.toLowerCase().indexOf("win") !== -1) {
    playerScore++;
  } else if (result.toLowerCase().indexOf("lose") !== -1) {
    computerScore++;
  }

  scoreDiv.textContent = `Your score: ${playerScore}, Computer score: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function resetButtonClickHandler(ev) {
  playerScore = 0;
  computerScore = 0;

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;

  resultDiv.textContent = "";
  scoreDiv.textContent = "";
}
