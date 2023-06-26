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

const computerMove = () => {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber <= 1/3) {
    computerMove === rock;
  } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
    computerMove === paper;
  } else {
    computerMove === scissors;
  }
}

console.log(computerMove);