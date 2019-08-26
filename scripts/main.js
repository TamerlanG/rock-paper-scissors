function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}
let playerChoice;

function rockChoice() {
  playerChoice = "rock";
  alert(playerChoice);
}

function paperChoice() {
  playerChoice = "paper";
  alert(playerChoice);
}

function scissorChoice() {
  playerChoice = "scissors";
  alert(playerChoice);
}
