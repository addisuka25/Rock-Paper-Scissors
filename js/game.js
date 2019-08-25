
function game() {
    

    let computerScore = 0;
    let playerScore = 0;
    let roundsPlay = 1;

    while (roundsPlay != 6 ) {
        
        
// this function return either rock, paper or scissors

function computerPlay() {

    let weaponToChoose = [ 'rock', 'paper', 'scissors' ];

   return  weaponToChoose[Math.floor( Math.random() * weaponToChoose.length )] ;

}


// this function play only one round

function playRound(playerSelection, computerSelection) {


    switch (playerSelection + computerSelection) {

        case 'rock' + 'scissors':

                console.log( "You Win! Rock beats Scissors" );
                playerScore ++;
                break;


        case 'paper' + 'rock':

                console.log( "You Win! Paper beats Rock" );
                playerScore ++;
                break;


        case 'scissors' + 'paper':

                console.log( "You Win! Scissors beats Paper" );
                playerScore ++;
                break;
            
        

        case 'scissors' + 'rock':

                console.log( "You Lose! Rock beats Scissors" );
                computerScore ++;
                break;

        case 'rock' + 'paper':

                console.log( "You Lose! Paper beats Rock" );
                computerScore ++;
                break;

        case 'paper' + 'scissors':

                console.log( "You Lose! Scissors beats Paper" );
                computerScore ++;
                break;
              
        
        case 'rock' + 'rock':
        case 'paper' + 'paper':
        case 'scissors' + 'scissors':

                console.log( `Its a Draw! ${playerSelection} Vs ${computerSelection}` );
                break;
    
        default:
                console.log(playerSelection + " " + computerSelection);
            break;
    }

  

}


        const playerSelection = prompt("Choose Your Weapon :-  Rock Paper or Scissors ").toLowerCase();

        const computerSelection = computerPlay()
       
        console.log(`Rounds: ${roundsPlay}  Computer Score: ${computerScore}  Player Score: ${playerScore}`)
        console.log(playRound(playerSelection, computerSelection));
    // console.log(`Rounds: ${rounds}  Computer Score: ${computerScore}  Player Score: ${playerScore}`)

        roundsPlay ++;
    }

}

game();