const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
}

// game function
function playGame(e) {
  restart.style.display = 'inline-block';
  const playerSelection = e.target.id;
  const computerSelection = getComputerSelection();
  const winner = getWinner(playerSelection, computerSelection);
  showWinner(winner, computerSelection);
}

//randomize computer selection
function getComputerSelection() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//getting who wins the round
function getWinner(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    return 'TIE!';
  } else if (playerSelection === 'rock') {
    if(computerSelection === 'paper') {
    return 'computer';
   } else {
    return 'player';
   }
  } else if(playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if(playerSelection === 'scissors') {
    if (computerSelection === 'rock'){
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerSelection) {
  if(winner === 'player') {
    scoreboard.player++;

    result.innerHTML =`
    <h1 class='text-win'>You win</h1>
    <i class='fa-solid fa-hand-${computerSelection} fa-10x'></i>
    <p>Computer chose <strong>${computerSelection.toUpperCase()}</strong>
    `;
  } else if( winner === 'computer') {
    scoreboard.computer++;

    result.innerHTML =`
    <h1 class='text-lose'>You Lose</h1>
    <i class='fa-solid fa-hand-${computerSelection} fa-10x'></i>
    <p>Computer chose <strong>${computerSelection.toUpperCase()}</strong>
    `;
  } else {
    result.innerHTML =`
    <h1>TIE!</h1>
    <i class='fa-solid fa-hand-${computerSelection} fa-10x'></i>
    <p>Computer chose <strong>${computerSelection.toUpperCase()}</strong>
    `;
  }

  //score display
  score.innerHTML = `
    <p> Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

  modal.style.display = 'block';
}

function restartGame () {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML =`
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function endGame() {
  if (scoreboard.player === 5 && scoreboard.computer < 5 ) {
    return 'YOU WON!'
  } else if( scoreboard.computer === 5 && scoreboard.player < 5 ){
    return 'YOU LOST :('
  }
  playGame.stop


}

choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

   