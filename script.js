let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "pedra";
    } else if (randomNumber === 1) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function getHumanChoice() {
    const choice = prompt("Escolha: pedra, papel ou tesoura");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    console.log(`Empate, ambos jogaram ${humanChoice}`);
    return;
  } else if (
            (humanChoice === "pedra" && computerChoice === "tesoura") ||
            (humanChoice === "papel" && computerChoice === "pedra") ||
            (humanChoice === "tesoura" && computerChoice === "papel")
  )  {
                humanScore++;
                console.log(`Você ganhou, ${humanChoice} ganha de ${computerChoice}, pontuação, você: ${humanScore} computador: ${computerScore}`)
  } else {
        computerScore++;
        console.log(`Você perdeu, ${computerChoice} ganha de ${humanChoice}, pontuação, você: ${humanScore} computador: ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);