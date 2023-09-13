const rpsChoices = ["rock", "paper", "scissors"];
let computerScore = 0;
let PlayerScore = 0;

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
      PlayerScore++;
      return "You win! Rock beats Scissors";
    }
  } else if (playerS === "paper") {
    if (computerS === "paper") {
      return "Draw! Both chose paper";
    } else if (computerS === "Scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper";
    } else {
      PlayerScore++;
      return "You win! Paper beats Rock";
    }
  } else {
    if (computerS === "scissors") {
      return "Draw! Both chose scissors";
    } else if (computerS === "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    } else {
      PlayerScore++;
      return "You win! Scissors beats Scissors";
    }
  }
}

function game() {
  console.log("Game Started!");
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter a valid game choice (rock, paper, scissors)"
    );
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }

  console.log("Game over!");
  if (PlayerScore === computerScore) {
    console.log("It is a draw");
  } else if (PlayerScore > computerScore) {
    console.log("You won the game!! :)");
  } else {
    console.log("You lost the game! :(");
  }

  console.log(
    `Your score is ${PlayerScore} and computer's score is ${computerScore}`
  );
}
