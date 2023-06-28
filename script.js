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
      console.log('tie');
    } else if (computerMove === 'paper') {
      console.log('lose');
    }  else if (computerMove === 'scissors') {
      console.log('win');
    }   

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('win');
    } else if (computerMove === 'paper') {
      console.log('tie');
    } else if (computerMove === 'scissors') {
      console.log('lose');
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      console.log('lose');
    } else if (computerMove === 'paper') {
      console.log('win');
    } else if (computerMove === 'scissors') {
      console.log('tie');
    }
  }
}