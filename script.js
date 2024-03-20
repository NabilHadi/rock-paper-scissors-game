function getComputerChoice() {
  return ["rock","paper","scissors"][Math.floor(Math.random() * 3)]
}

function playRound(playerSelection = "", computerSelection) {
  playerSelection = playerSelection.toLocaleLowerCase();
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It is a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rocks"
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It is a draw!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper"
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It is a draw!";
  } else {
    return `Error: Unknown selection, playerSelection: (${playerSelection}), computerSelection: (${computerSelection}) `;
  }
}



function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your selection; Rock, Paper or Scissors.");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  
}
