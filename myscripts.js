const selections = ['rock', 'paper', 'scissors']
const winners = [];

// the game itself//
function game() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = 'Play Again!'
    logWins();
    
}

// each round thats  played//
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

// player input//
function playerChoice(){
    let input = prompt('Choose your weapon: ROCK, PAPER, SCISSORS');
    while (input == null) {
        input = prompt('Sorry cannot bring outside weapons, choose from the following: ROCK, PAPER, SCISSORS');
    }
    input = input.toLowerCase();
        let check = validateInput(input);
    while (check == false) {
        input = prompt('Sorry cannot bring outside weapons, choose from the following: ROCK, PAPER, SCISSORS');
        }  
        while (input == null) {
            input = prompt('Sorry cannot bring outside weapons, choose from the following: ROCK, PAPER, SCISSORS');
        }
    input = input.toLowerCase();
    check = validateInput(input);
    return input;

}

//computer's randomized choices//
 
function computerChoice(){
    return selections[Math.floor(Math.random()*selections.length)];
}

// validating selections//
function validateInput(selection){
    if(selections.includes(selection)){
        return true;
    } else {
        return false ;
    }
}

// recording winnner of each round//
function checkWinner(choiceP, choiceC) {
    if(choiceC == choiceP){
        return 'Tie';
    }   else if (
            (choiceP === 'rock' && choiceC === 'scissors') ||
            (choiceP === 'scissors' && choiceC === 'paper') || 
            (choiceP === 'paper' && choiceC === 'rock')) {
        return "Player";
    }   else {
        return "Computer";
    }
}

// recording wins //
function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

// recording each round and scores //
function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the Round');
    console.log('-----------------------');
}
