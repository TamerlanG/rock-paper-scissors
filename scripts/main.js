function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
let playerChoice;
let characterChoiceText = document.querySelector(".playerChoice");
let resultText = document.querySelector(".result");

function rockChoice() {
  playerChoice = "rock";
  characterChoiceText.innerHTML = "You picked the surprised rock";
}

function paperChoice() {
  playerChoice = "paper";
  characterChoiceText.innerHTML = "You picked the suave paper";
}

function scissorChoice() {
  playerChoice = "scissors";
  characterChoiceText.innerHTML = "You picked the sharp ass scissors";
}

function gameStart() {
  let computerChoice = computerPlay();
  if (playerChoice == null) {
    alert("Please Select Character");
  } else {
    if (playerChoice == computerChoice) {
      resultText.innerHTML = "It's a tie ladies and gentlemen";
    } else {
      switch (playerChoice) {
        case "rock":
          if (computerChoice == "paper") {
            resultText.innerHTML = "You lose hahahahaha";
            break;
          } else {
            resultText.innerHTML = "Oh shit, you actually won";
            break;
          }
        case "paper":
          if (computerChoice == "scissors") {
            resultText.innerHTML = "You lose hahahahaha";
            break;
          } else {
            resultText.innerHTML = "God fucking damn it, this game is broken";
            break;
          }

        case "scissors":
          if (computerChoice == "rock") {
            resultText.innerHTML = "You lose hahahahaha";
            break;
          } else {
            resultText.innerHTML = "Luck isn't on my side today";
            break;
          }
      }
    }
  }

  playerChoice = null;
  characterChoiceText.innerHTML = "Please Select A Character Again";
}
