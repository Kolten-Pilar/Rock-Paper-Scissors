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
    score.computerScore.wins = 0;
    score.computerScore.losses = 0;
    score.computerScore.ties = 0;
    score.playerScore.wins = 0;
    score.playerScore.losses = 0;
    score.playerScore.ties = 0;
    playerResult.innerText = (score.playerScore.wins);
    computerResult.innerText = (score.computerScore.wins);
    clickCount = 0;
    return score;
  } else if (score.computerScore.wins === 3) {
    alert('You Lose The Game :((');
    alert('New Game!!');
    score.computerScore.wins = 0;
    score.computerScore.losses = 0;
    score.computerScore.ties = 0;
    score.playerScore.wins = 0;
    score.playerScore.losses = 0;
    score.playerScore.ties = 0;
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




// let userScore = score.playerScore.wins;
// let opponentScore = score.computerScore.wins;
// let playerMove = document.querySelectorAll('button');

// let i = 0;
// const play = () => {
//   let playerMove = prompt(`you selected ${playerMove}`)
// }

