const rpsChoices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function isValidRpsChoice(str) {
  return rpsChoices.some((s) => s === str);
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return rpsChoices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  let playerS = playerSelection.toLowerCase();
  let computerS = computerSelection.toLowerCase();

  if (!isValidRpsChoice(playerS)) {
    return "Player selection is not valid";
  }

  if (!isValidRpsChoice(computerS)) {
    return "Computer selection is not valid";
  }

  if (playerS === "rock") {
    if (computerS === "rock") {
      return "Draw! Both chose rock";
    } else if (computerS === "paper") {
      computerScore++;
      return "You lose! Paper beats Rock";
    } else {
      playerScore++;
      return "You win! Rock beats Scissors";
    }
  } else if (playerS === "paper") {
    if (computerS === "paper") {
      return "Draw! Both chose paper";
    } else if (computerS === "Scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper";
    } else {
      playerScore++;
      return "You win! Paper beats Rock";
    }
  } else {
    if (computerS === "scissors") {
      return "Draw! Both chose scissors";
    } else if (computerS === "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    } else {
      playerScore++;
      return "You win! Scissors beats Scissors";
    }
  }
}

const resultDiv = document.querySelector("#result");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

function handleBtnClick(e) {
  const selection = e.target.dataset.key;
  if (!selection) return;

  resultDiv.textContent = playRound(selection, getComputerChoice());
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    resultDiv.textContent = `${
      playerScore > computerScore ? "You" : "Computer"
    } won!!`;
    playerScore = 0;
    computerScore = 0;
  }
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", handleBtnClick);
paperBtn.addEventListener("click", handleBtnClick);
scissorsBtn.addEventListener("click", handleBtnClick);
