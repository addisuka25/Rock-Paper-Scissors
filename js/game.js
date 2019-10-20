
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
                playerScore ++;
                console.log( `You Win! YourWeapon ${playerSelection} Beats Computer'sWeapon ${computerSelection}` );
                
                break;


        case 'paper' + 'rock':
                playerScore ++;
              
                console.log( `You Win! YourWeapon ${playerSelection} Beats Computer'sWeapon ${computerSelection}` );
                break;


        case 'scissors' + 'paper':
                playerScore ++;
             
                console.log( `You Win! YourWeapon ${playerSelection} Beats Computer'sWeapon ${computerSelection}` );
                
                break;
            
        

        case 'scissors' + 'rock':
                computerScore ++;
            
                console.log( `You Lose! YourWeapon ${playerSelection} Loses To Computer'sWeapon ${computerSelection}` );
                break;

        case 'rock' + 'paper':
                computerScore ++;
                
                console.log( `You Lose! YourWeapon ${playerSelection} Loses To Computer'sWeapon ${computerSelection}` );
                break;

        case 'paper' + 'scissors':
                computerScore ++;
              
                console.log( `You Lose! YourWeapon ${playerSelection} Loses To Computer'sWeapon ${computerSelection}` );
                break;
              
        
        case 'rock' + 'rock':
        case 'paper' + 'paper':
        case 'scissors' + 'scissors':

               
                console.log( `Its a Draw! YourWeapon ${playerSelection} Vs Computer'sWeapon ${computerSelection}` );
                break;
    
        default:
                console.log(playerSelection + " " + computerSelection);
            break;
    }

  

}


        
        const playerSelection = prompt("Choose Your Weapon :-  Rock Paper or Scissors ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

        roundsPlay ++;

        console.log(`Rounds: ${roundsPlay}  Computer Score: ${computerScore}  Player Score: ${playerScore}`)
    }

    

    

}

game();