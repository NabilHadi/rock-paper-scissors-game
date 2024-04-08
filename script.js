function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection = "", computerSelection) {
  playerSelection = playerSelection.toLocaleLowerCase();
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It is a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rocks";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It is a draw!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It is a draw!";
  } else {
    return `Error: Unknown selection, playerSelection: (${playerSelection}), computerSelection: (${computerSelection}) `;
  }
}

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  outputDiv.textContent = playRound(playerSelection, computerSelection);
  displayScore();
  if (playerScore >= 5 || computerScore >= 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let msg = playerScore >= 5 ? "You won the game!!" : "You  lose the game :(";
    outputDiv.textContent = msg;
  }
}

function displayScore() {
  scoreDiv.textContent = `Player score: ${playerScore} |  Computer score: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
rockBtn.addEventListener("click", () => {
  playGame("rock");
});
const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";
paperBtn.addEventListener("click", () => {
  playGame("paper");
});
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors";
scissorsBtn.addEventListener("click", () => {
  playGame("scissors");
});


container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);


const outputDiv = document.createElement("div");
outputDiv.textContent = "Click a button to play!";
outputDiv.classList.add("output");
container.appendChild(outputDiv);

const scoreDiv = document.createElement("div");
scoreDiv.textContent = "Player score: 0 |  Computer score: 0";
container.appendChild(scoreDiv);