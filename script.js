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
const score = {playerScore : {
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
      score.playerScore.ties++
      score.computerScore.ties++
      console.log('tie');
    } else if (computerMove === 'paper') {
      score.playerScore.losses++
      score.computerScore.wins++
      console.log('lose');
    }  else if (computerMove === 'scissors') {
      score.playerScore.wins++
      score.computerScore.losses++
      console.log('win');
    }   

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      score.playerScore.wins++
      score.computerScore.losses++
      console.log('win');
    } else if (computerMove === 'paper') {
      score.playerScore.ties++
      score.computerScore.ties++
      console.log('tie');
    } else if (computerMove === 'scissors') {
      score.playerScore.losses++
      score.computerScore.wins++
      console.log('lose');
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      score.playerScore.losses++
      score.computerScore.wins++
      console.log('lose');
    } else if (computerMove === 'paper') {
      score.playerScore.wins++
      score.computerScore.losses++
      console.log('win');
    } else if (computerMove === 'scissors') {
      score.playerScore.ties++
      score.computerScore.ties++
      console.log('tie');
      // i will change this to result tomorrow
    }
  }

  // using the DOM to show results
  let computerResult = document.getElementById('computer-result');
  computerResult.innerText = (score.computerScore.wins);

  let playerResult = document.getElementById('player-result');
  playerResult.innerText = (score.playerScore.wins);


  // alert box to show what each player chose
  alert((`You chose ${playerMove}, computer chose ${computerMove}`));
  
  
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
  round.textContent = (`It is round ${clickCount}`);
});



// let userScore = score.playerScore.wins;
// let opponentScore = score.computerScore.wins;
// let playerMove = document.querySelectorAll('button');

// let i = 0;
// const play = () => {
//   let playerMove = prompt(`you selected ${playerMove}`)
// }

