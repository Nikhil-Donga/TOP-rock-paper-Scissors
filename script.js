let playerWinCount = 0;
let techWinCount = 0;

function getComputerChoice(){
    const choice = ['rock','paper','scissors'];//three choices array
    const rNum = Math.floor(Math.random()*choice.length);//creating random number
    console.log(choice[rNum]);
    return choice[rNum];
    
}

function getPlayerChoice()
{
  return  prompt("enter your selection Rock paper scissor");
}
function playRound(computerSelection,playerSelection) {
   
  
    const playerChoice = playerSelection.toLowerCase();
   const computerChoice = computerSelection.toLowerCase();
  
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerWinCount ++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  else
  {techWinCount ++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;}
    
  }
  function game(){
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  const result = playRound(computerSelection,playerSelection);
  return console.log(result);
  }

  game();
  game();
  game();
  game();
  game();
  console.log("player count"+playerWinCount);
  console.log("tech counter" +techWinCount);
if(playerWinCount>techWinCount)
{
    console.log("player win this round");
}
else
{
    console.log("computer win this round");
}