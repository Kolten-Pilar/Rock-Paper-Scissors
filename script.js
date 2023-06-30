// code for splash screen 
const splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  // when screen is clicked, adds CSS styling opacity
  splashScreen.style.opacity = 0;
  // adds hidden class to splash class after 600ms so we don't see the pointer cursor
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
});

// initialize score
let score = {playerScore : {
  wins: 0,
  losses: 0,
  ties: 0,
  },

computerScore : {
  wins: 0,
  losses: 0,
  ties: 0,
  }
};

// initialize wins of each player
let computerRoundCounter = document.getElementById('computer-rounds');
let computerRoundCount = 0;

let playerRoundCounter = document.getElementById('player-rounds');
let playerRoundCount = 0;

// get the data from local storage if there is any, otherwise use 0. We have to use ||(or operator) or else when the page loads it will come back as null on first time loading
playerRoundCount = localStorage.getItem('playerRoundCount') || 0;
computerRoundCount = localStorage.getItem('computerRoundCount') || 0;

// we have to display the values that local storage reads upon loading
playerRoundCounter.textContent = `Player Games Won: ${playerRoundCount}`;
computerRoundCounter.textContent = `Computer Games Won: ${computerRoundCount}`;

// initialize and display the score of computer and user
let computerResult = document.getElementById('computer-result');
  computerResult.innerText = (score.computerScore.wins);

  let playerResult = document.getElementById('player-result');
  playerResult.innerText = (score.playerScore.wins);


// function for determining computer's choice
const computerChoice = () => {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber <= 1/3) {
    computerMove = 'rock';
  } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

// function to compare computer choice vs player's choice
const theGame = (playerMove) => {
  const computerMove = computerChoice();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      // each score case gets incremented
      score.playerScore.ties++;
      score.computerScore.ties++;
      result = `This Round Is a Tie!`;
      console.log('tie');
    } else if (computerMove === 'paper') {
      score.playerScore.losses++
      score.computerScore.wins++
      result = 'You lose This Round :(('
      console.log('lose');
    }  else if (computerMove === 'scissors') {
      score.playerScore.wins++
      score.computerScore.losses++
      result = 'You Win This Round!';
      console.log('win');
    }   

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      score.playerScore.wins++
      score.computerScore.losses++
      result = 'You Win This Round!';
      console.log('win');
    } else if (computerMove === 'paper') {
      score.playerScore.ties++
      score.computerScore.ties++
      result = `This Round Is a Tie!`;
      console.log('tie');
    } else if (computerMove === 'scissors') {
      score.playerScore.losses++
      score.computerScore.wins++
      result = 'You lose This Round :(('
      console.log('lose');
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      score.playerScore.losses++
      score.computerScore.wins++
      result = 'You lose This Round :(('
      console.log('lose');
    } else if (computerMove === 'paper') {
      score.playerScore.wins++
      score.computerScore.losses++
      result = 'You Win This Round!';
      console.log('win');
    } else if (computerMove === 'scissors') {
      score.playerScore.ties++
      score.computerScore.ties++
      result = `This Round Is a Tie!`;
      console.log('tie');
    }
  }

  // using the DOM to show results
  let computerResult = document.getElementById('computer-result');
  computerResult.innerText = (score.computerScore.wins);

  let playerResult = document.getElementById('player-result');
  playerResult.innerText = (score.playerScore.wins);


  // alert box to show what each player chose
  alert((`You chose ${playerMove}, computer chose ${computerMove}. ${result}`));

  if (score.playerScore.wins === 3) {
    alert('You Win The Game!');
    alert('New Game!!');
    // keeps track of how many games has been won and stores in local storage
    playerRoundCount++;
    localStorage.setItem('playerRoundCount', playerRoundCount);
    localStorage.setItem('computerRoundCount', computerRoundCount);
    playerRoundCounter.textContent = (`Player Games Won: ${playerRoundCount}`);
    // resets score data to 0
    score = {playerScore : {
      wins: 0,
      losses: 0,
      ties: 0,
      },
    
    computerScore : {
      wins: 0,
      losses: 0,
      ties: 0,
      }
    };
    // below updates score of both players upon end of game on the page
    playerResult.innerText = (score.playerScore.wins);
    computerResult.innerText = (score.computerScore.wins);
    clickCount = 0;
    return score;
  } else if (score.computerScore.wins === 3) {
    alert('You Lose The Game :((');
    alert('New Game!!');
    // keeps track of how many games has been won and stores in local storage
    computerRoundCount++;
    localStorage.setItem('playerRoundCount', playerRoundCount);
    localStorage.setItem('computerRoundCount', computerRoundCount);
    computerRoundCounter.innerText = (`Computer Games Won: ${computerRoundCount}`);
    // resets score data to 0
    score = {playerScore : {
      wins: 0,
      losses: 0,
      ties: 0,
      },
    
    computerScore : {
      wins: 0,
      losses: 0,
      ties: 0,
      }
    };
    // below updates score of both players upon end of game
    playerResult.innerText = (score.playerScore.wins);
    computerResult.innerText = (score.computerScore.wins);
    clickCount = 0;
    return score;
  };
  

  console.log(`Computer score is ${JSON.stringify(score.computerScore)}`);
  console.log(`Player score is ${JSON.stringify(score.playerScore)}`);
  
}
// ^^end of theGame

// shows each round
const button = document.getElementById('buttons');
const round = document.getElementById('round-number');

let clickCount = 1;
button.addEventListener('click', () => {
  clickCount++;
  round.textContent = (`Round ${clickCount}`);
});

// added reset button
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  score = {playerScore : {
    wins: 0,
    losses: 0,
    ties: 0,
    },
  
  computerScore : {
    wins: 0,
    losses: 0,
    ties: 0,
    }
  };
  clickCount = 1;
  // updates on the page after clicking
  round.textContent = (`Round ${clickCount}`);

  let playerResult = document.getElementById('player-result');
  playerResult.innerText = (score.playerScore.wins);

  let computerResult = document.getElementById('computer-result');
  computerResult.innerText = (score.computerScore.wins);

  let computerRoundCounter = document.getElementById('computer-rounds');
  let computerRoundCount = 0;
  computerRoundCounter.innerText = (`Computer Games Won: ${computerRoundCount}`);

  let playerRoundCounter = document.getElementById('player-rounds');
  let playerRoundCount = 0;
  playerRoundCounter.textContent = (`Player Games Won: ${playerRoundCount}`);

  // resets local storage to 0
  localStorage.setItem('playerRoundCount', 0);
  localStorage.setItem('computerRoundCount', 0);
})



// let userScore = score.playerScore.wins;
// let opponentScore = score.computerScore.wins;
// let playerMove = document.querySelectorAll('button');

// let i = 0;
// const play = () => {
//   let playerMove = prompt(`you selected ${playerMove}`)
// }

