let computer = document.getElementById('computer-result')
let player = document.getElementById('player-result')
let announcer = document.getElementById('announcer')
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')
let gameDone = document.getElementById('game-done')
let playAgainButton = document.getElementById('play-again')

let buttonContainer = document.getElementById('buttons');
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

const buttons = document.getElementsByClassName('rps');
const cards = document.getElementsByClassName('card');

// PLAY GAME - Best 3 out of 5 - 
let scores = {
   player: 0,
   computer: 0
}


function getComputerChoice() {
   const choices = ['✊', '✋', '✌️']
   const randomChoice = choices[Math.floor(Math.random() * choices.length)]
   return randomChoice;
}

function playRound(playerChoice, computerChoice) {
   // play the round
   if (computerChoice === playerChoice) {
      console.log("It's a tie! Play again.")
      //////code here///////
      return "tie"
   } else if(
      (playerChoice === '✊' && computerChoice === '✋') ||
      (playerChoice === '✋' && computerChoice === '✌️') ||
      (playerChoice === '✌️' && computerChoice === '✊')
   ) {
      return "Computer"
   } else {
      return "Player"
   }
}

function updateUI(playerChoice, computerChoice, result, scores) {
   // Add the animation class to trigger the animation
   player.classList.add('animate');
   computer.classList.add('animate');


   // Remove the animation class after the animation completes
   setTimeout(function() {
      player.classList.remove('animate');
      computer.classList.remove('animate');

      if (result === 'tie') {
         announcer.innerText = `Tie! Play again.`
      }
      else {
         announcer.innerText = `${result} wins this round!`
      }
      playerScore.innerText = scores.player;
      computerScore.innerText = scores.computer;

      computer.innerText = `${computerChoice}`
      player.innerText = `${playerChoice}`
   }, 300); // Adjust the duration (in milliseconds) if needed
}


function resetUI(){
   computer.innerText = ``;
   player.innerText = ``;
   announcer.innerText = ``;
   playerScore.innerText = scores.player;
   computerScore.innerText = scores.computer;
}

function isGameDone() {
   if(scores.player >= 3 || scores.computer >= 3) {
      return true
   } else false
}


function playGame(playerChoice) {
   const computerChoice = getComputerChoice();   //get computerchoice

   const result = playRound(playerChoice, computerChoice) //pass in computerchoice and player choice to play the round

   //update score
   if(result === 'Computer') {
      scores.computer += 1
   } else if (result === 'Player') {
      scores.player += 1
   }
   //update the ui --> (result, playerchoice, computerchoice)
   updateUI(playerChoice, computerChoice, result, scores);
   

   //Check if either player or computer has 3 points
   if(isGameDone()) {
      playAgainButton.style.display = 'inline-block'
      // buttonContainer.style.display = 'none'
      gameDone.style.display = 'block'
      gameDone.innerText = `...And that's game done. The winner is ${result}!`

      //disable buttons
      for (let i = 0; i < buttons.length; i++) {
         buttons[i].disabled = true;
         buttons[i].classList.add('disabled');
      } 
      
   }
}

function restartGame() {
   //restart score
   scores.player = 0;
   scores.computer = 0;

   gameDone.style.display = 'none'
   playAgainButton.style.display = 'none'

   for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      buttons[i].classList.remove('disabled');
    }       
   resetUI();
}


rockButton.addEventListener('click', function() { playGame('✊')});
paperButton.addEventListener('click', function() { playGame('✋')});
scissorsButton.addEventListener('click', function() { playGame('✌️')});
playAgainButton.addEventListener('click', function() { restartGame()})



