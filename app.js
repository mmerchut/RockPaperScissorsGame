console.log('dziala')

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btnStart = document.querySelector('.start');
const playerChoiceDiv = document.querySelector('.player__choice');


let computerSymbol = '';
let playerSymbol = '';
let min = 1;
let max = 3;

const choiceRock = function() {
    playerSymbol = 'rock';
    playerChoiceDiv.textContent = `${playerSymbol}`;
}
const choicePaper = function() {
    playerSymbol = 'paper';
    playerChoiceDiv.textContent = `${playerSymbol}`;
}
const choiceScissors = function() {
    playerSymbol = 'scissors';
    playerChoiceDiv.textContent = `${playerSymbol}`;
}

function getRandomComputer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const startGame = function() {
    
      computerChoice = getRandomComputer(min, max);
      switch (computerChoice) {
          case 1:
            computerSymbol = 'scissors'
            break;
          case 2:
            computerSymbol = 'rock'
            break;
          case 3:
            computerSymbol = 'paper'
            break;
      }

    if(playerSymbol == computerSymbol) {
        console.log('Draw')
        playerChoiceDiv.textContent = `Draw`;
    }
    else if(playerSymbol == 'scissors' && computerSymbol == 'paper' || playerSymbol == 'rock' && computerSymbol == 'scissors') {
        console.log('You Won')
        playerChoiceDiv.textContent = `You Won`;
    }
    else {
        console.log('You Lost')
        playerChoiceDiv.textContent = `You Lost`;
    }
    console.log(` Your choice ${playerSymbol}`);
    console.log(` Computer choice ${computerSymbol}`);
    
    
}





btnRock.addEventListener('click', choiceRock);
btnPaper.addEventListener('click', choicePaper);
btnScissors.addEventListener('click', choiceScissors);

btnStart.addEventListener('click', startGame)