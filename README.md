This is my version of Rock, Paper, Scissors. It will be played against the computer. In order to win, you must be the first to accrue 3 wins. You lose if you aren't the first the 3 wins. The game will keep playing as long as no player has 3 wins. Ties do not count towards wins or losses but the ties tally will be listed. The rounds will be each turn. For example, the game will display something like, 'Round 1: you win/lose/tie.'
Technologies Used: HTML/CSS/JavaScript/DOM
Stretch Goals: Reset button. CSS styling. Responsive mobile design (flexbox). Working with instructors to determine additional stretch goals.

6/26/23 created new repo and met with instructor to determine my project and wrote up a README.

US1: Upon loading the website, the user should be greeted with a splash screen. The screen should have a welcome message and when the user clicks anywhere on the screen, the splash screen should disappear revealing the game.
  - We need to have a div with a named class/id that we can manipulate with CSS/JS.
  - We will use the DOM to add an event listener 'click' so when users click on the page, the splash screen goes away.
  - We will use CSS to style the splash screen.

US2: After the splash screen has disappeared, we need to see the buttons for rock, paper, scissors. 
  - buttons need to be labeled 
  - what happens when we press a button? Buttons need to have functionality
    -- We need to determine the computer's choice.
      --- since there are 3 choices we can say there is a 1/3 chance of each choice. We can use math.random() to have the computer randomly select a number and then write if statements to allocate each choice. So, we can say something like 'if the computer's random number is 1/3 or less, the computer's choice is rock. If the computer's random number is greater than 1/3 AND less than 2/3, the computer's choice is paper. If the computer's random number is greater than 2/3, the computer's choice is scissors.
    
US2 CONT:    
    6/28/23
    Now that we have a function for determining computer's choice, we need to have a way to compare the player's choice when they click a button to the computer's choice
      -- we can use an if-else function again here to compare the function we created to determine the computer's move to our player's move
      -- log into console to ensure functionality

US3: As a player, we want to see the results visually instead of logging into the console.
  - We need to see the Round, Score, as well as if the player or computer wins and what each player selected as their choice.
  - we need to initialize the score as 0 near the top of the JS code
  - we need to use the DOM to display the results and current round of each button click into the HTML
  - create a way to let user know each player's choice

US4: When a set number of wins has been reached by either player, we need a way to end the game.
  - Have a way to show the user that they have won/lost
  - Reset the game automatically and update the score/round counter back to 0
  - Allow the user to play again like it was from the beginning.

Extra's: Try to use local storage to store the amount of times the game has been won by either player
  - be sure to make the reset button reset the local storage too


Overall, this was a fun and eye-opening first solo project. It feels good to have some JavaScript/DOM concepts start to really 'sink in' and, in turn, I am able to look up on Google the things I need to find much easier. I still had to resort to researching methods a lot but knowing what I'm trying to look for makes finding said content easier now.

Areas to improve upon:
- I need to try to incoporate arrays more. I stayed away from them in this project but I think I could have used an array on the score object.
- Loops. I began to write a loop for the computer choice that would iterate over the rock paper or scissor choice and select it randomly but I scrapped the idea and wrote multiple if statements which leads me to my next point
- condense the code. I looked up easier ways to write this game but I really wanted to try to write everything myself (and look up parts I was having issues with) with knowledge that I had up to this point. This will come with more practice and time.
- design. I am no graphical designer, but I know I could do better in this apsect.