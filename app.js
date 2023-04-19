//PSEUDO//
//score counter
   //player and computer

//round counter


//function getComputerChoice 
   // 3 choices
   //mathrandom floor --> chooses a number between 1 to 3
   // if 1 = rock
   // if 2 = paper
   // if 3 = scissors
//function get playerChoice
   //ask --> input   


//const playerSelection
//const computerSelection = getComputerChoice()

//function play round
//function run games


// function getComputerChoice() {
//    const randomNumber = Math.floor(Math.random() * 3) + 1;
//    if(randomNumber === 1) {
//       return 'rock'
//    } else if(randomNumber === 2) {
//       return 'paper'
//    } else {
//       return 'scissors'
//    }
// } edit: found a better way

//END PSEUDO//

//START HERE//
const choices = ['rock', 'paper', 'scissors']



function getComputerChoice() {
   const randomChoice = choices[Math.floor(Math.random() * choices.length)]
   return randomChoice
}


function getPlayerChoice() {
   //get player input
   const playerInput = prompt('rock, paper, or scissors?')
   
   //convert the input to lower case 
   const convertedInput  = playerInput.toLowerCase();

   // if input either rock, paper, scissors, then return the input
   if (convertedInput === 'rock' || convertedInput === 'paper' || convertedInput === 'scissors') {
      return convertedInput;
   } else {
       //else, invalid input, try gain. --> return getPlayerChoice();
      console.log('Invalid input, please try again')
      return getPlayerChoice();
   }
}



/// PLAY ROUND ///
function playRound(computerChoice, playerChoice) {
   console.log(`computer: ${computerChoice.toUpperCase()}`)
   console.log(`player: ${playerChoice.toUpperCase()}`)

   // play the round
   if (computerChoice === playerChoice) {
      console.log("It's a tie! Play again.")
      return "tie"
   } else if(
      (playerChoice === 'rock' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'rock')
   ) {
      console.log('Computer wins this round!')
      return "computer"
   } else {
      console.log('Player wins this round!')
      return "player"
   }
}


// PLAY GAME - Best 3 out of 5 - 
function game() {
   //player/computer score, round count
   let playerScore = 0
   let computerScore = 0
   let roundCount = 1

   //while player OR computer score is < 3, keep playing
      //const computerChoice = getComputerChoice();
      //const playerChoice = getPlayerChoice();

      //const result = playround()
         //if result = tie
            //return 
         //if result = computer 
            //computer score ++
         // else
            // playerscore ++
   //
   while (playerScore < 3 && computerScore < 3) {
      const computerChoice = getComputerChoice();
      const playerChoice = getPlayerChoice();

      console.log(`ROUND ${roundCount}`)
      const roundResult = playRound(computerChoice, playerChoice);
      roundCount++

      if (roundResult === "computer") {
         computerScore++;
      }  else if (roundResult === "player") {
         playerScore++;
      } else {
         continue;
      }
      console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
   }


   //if playerscore = 3 
      // const winner computer player
   //else
      // const winner = computer
   //console.log('game done! winner is )  
   console.log('GAME OVER!')
   if(playerScore > computerScore) {
      console.log('Player wins the game!')
   } else {
      console.log('Computer wins the game!')
   }
}

//button to start the game
document.getElementById('play').addEventListener('click', game)