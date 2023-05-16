let computer = document.getElementById('computer-result')
let player = document.getElementById('player-result')
let announced = document.getElementById('announcer')
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')
let canvasBlock = document.getElementById('canvas')
let clickStartTitle = document.getElementById('clickStart')

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
   computer.innerText = `${computerChoice}`
   player.innerText = `${playerChoice}`
   if (result === 'tie') {
      announced.innerText = `Tie! Play again.`
   }
   else {
      announced.innerText = `${result} wins this round!`
   }
   playerScore.innerText = scores.player;
   computerScore.innerText = scores.computer;
}

// PLAY GAME - Best 3 out of 5 - 
let scores = {
   player: 0,
   computer: 0
}

function checkScore() {
   if(scores.player >= 3 || scores.computer >= 3) {
      return true
   } else false
}

function playGame(playerChoice) {
   if(window.getComputedStyle(clickStartTitle).display === 'block') {
      clickStartTitle.style.display = 'none'
   }
   if(window.getComputedStyle(canvasBlock).display === 'none') {
      canvasBlock.style.display = 'block';
   }

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
   if(checkScore()) {
      let h3 = document.createElement('h3')
      h3.innerText = `...And that's game done. The winner is ${result}!`
      announced.appendChild(h3)
   }
}

document.getElementById('rock').addEventListener('click', function() { playGame('✊')});
document.getElementById('paper').addEventListener('click', function() { playGame('✋')});
document.getElementById('scissors').addEventListener('click', function() { playGame('✌️')});


///CURRENTLY - When game done, need to to disable the buttons