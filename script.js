const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "It's a draw!";
    } else if (computerChoice === "paper") {
      return "You lose! Paper beats Rock";
    } else if (computerChoice === "scissors") {
      return "You win! Rock beats Scissors";
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
      return "You win! Paper beats Rock";
    } else if (computerChoice === "paper") {
      return "It's a draw!";
    } else if (computerChoice === "scissors") {
      return "You lose! Scissors beats Paper";
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
      return "You lose! Rock beats Scissors";
    } else if (computerChoice === "paper") {
      return "You win! Scissors beats Paper";
    } else if (computerChoice === "scissors") {
      return "It's a draw!";
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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Enter your choice: rock | paper | scissors");
    console.log(playRound(playerChoice, getComputerChoice()));
  }
}

game();
