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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your selection: rock | paper | scissors"
    );
    const computerSelection = getComputerChoice();
    let result = playRound(computerSelection, playerSelection);
    if (result.toLowerCase().indexOf("win") !== -1) {
      playerScore++;
    } else if (result.toLowerCase().indexOf("lose") !== -1) {
      computerScore++;
    }
    console.log(
      result,
      `| You: ${playerSelection}, Computer: ${computerSelection}`
    );
    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("%cYou Won!", "font-size: 30px; color: green");
  } else if (computerScore > playerScore) {
    console.log("%cComputer Won!", "font-size: 30px; color: red");
  } else {
    console.log("%cIt is a Draw!", "font-size: 30px; color: yellow");
  }
}

game();
