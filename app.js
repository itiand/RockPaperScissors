function getComputerChoice() {
   const randomChoice = choices[Math.floor(Math.random() * choices.length)]
   return randomChoice;
}


/// PLAY ROUND ///
function playRound(computerChoice, playerChoice) {
   // play the round
   if (computerChoice === playerChoice) {
      console.log("It's a tie! Play again.")
      //////code here///////
      return "tie"
   } else if(
      (playerChoice === 'rock' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'rock')
   ) {
      console.log('Computer wins this round!')
            //////code here///////
      return "computer"
   } else {
      console.log('Player wins this round!')
            //////code here///////
      return "player"
   }
}


// PLAY GAME - Best 3 out of 5 - 
function playGame(playerChoice) {
   


}


