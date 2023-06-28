This is my version of Rock, Paper, Scissors. It will be played against the computer. In order to win, you must be the first to accrue 3 wins. You lose if you aren't the first the 3 wins. The game will keep playing as long as no player has 3 wins. Ties do not count towards wins or losses but the ties tally will be listed. The rounds will be each turn. For example, the game will display something like, 'Round 1: you win/lose/tie.'
Stretch Goals: Reset button. CSS styling. Responsive mobile design (flexbox). Working with instructors to determine additional stretch goals.

6/26/23 created new repo and met with instructor to determine my project and wrote up a README.

US1: Upon loading the website, the user should be greeted with a splash screen. The screen should have a welcome message and when the user clicks anywhere on the screen, the splash screen should disappear revealing the game.
  -We need to have a div with a named class/id that we can manipulate with CSS/JS.
  -We will use the DOM to add an event listener 'click' so when users click on the page, the splash screen goes away.
  -We will use CSS to style the splash screen.

US2: After the splash screen has disappeared, we need to see the buttons for rock, paper, scissors. 
  -buttons need to be labeled 
  -what happens when we press a button? Buttons need to have functionality
    --We need to determine the computer's choice.
      ---since there are 3 choices we can say there is a 1/3 chance of each choice. We can use math.random() to have the computer randomly select a number and then write if statements to allocate each choice. So, we can say something like 'if the computer's random number is 1/3 or less, the computer's choice is rock. If the computer's random number is greater than 1/3 AND less than 2/3, the computer's choice is paper. If the computer's random number is greater than 2/3, the computer's choice is scissors.
    
    -Now that we have a function for determining computer's choice, we need to have a way to compare the player's choice when they click a button to the computer's choice
      --we can use an if-else function again here to compare the function we created to determine the computer's move to our player's move
      -- log into console to ensure functionality