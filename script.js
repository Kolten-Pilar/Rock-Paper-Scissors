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
const playerScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const computerScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};



// function for determining computer's choice
function computerChoice () {
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
function theGame (playerMove) {
  const computerMove = computerChoice();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      playerScore.ties++
      computerScore.ties++
      console.log('tie');
    } else if (computerMove === 'paper') {
      playerScore.losses++
      computerScore.wins++
      console.log('lose');
    }  else if (computerMove === 'scissors') {
      playerScore.wins++
      computerScore.losses++
      console.log('win');
    }   

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      playerScore.wins++
      computerScore.losses++
      console.log('win');
    } else if (computerMove === 'paper') {
      playerScore.ties++
      computerScore.ties++
      console.log('tie');
    } else if (computerMove === 'scissors') {
      playerScore.losses++
      computerScore.wins++
      console.log('lose');
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      playerScore.losses++
      computerScore.wins++
      console.log('lose');
    } else if (computerMove === 'paper') {
      playerScore.wins++
      computerScore.losses++
      console.log('win');
    } else if (computerMove === 'scissors') {
      playerScore.ties++
      computerScore.ties++
      console.log('tie');
    }
  }
  console.log(`Computer score is ${JSON.stringify(computerScore)}`);
  console.log(`Player score is ${JSON.stringify(playerScore)}`);
}

