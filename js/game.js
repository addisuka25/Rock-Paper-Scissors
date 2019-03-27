


    function game() {

        let playerScore = 0 ;
        let computerScore = 0 ;

        let rounds = 1;

        while (rounds < 6) {
            
            let weaponToChoose = ['rock' , 'paper' , 'scissors'];
        
        function computerPlay() {

            return weaponToChoose[Math.floor(Math.random()*weaponToChoose.length)]
        }

        function playRound(playerSelection, computerSelection) {

            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                console.log("You Win! Rock beats Scissors")
                playerScore++;
            } else if (playerSelection === 'paper' && computerSelection === 'rock' ) {
                console.log("You Win! Paper beats Rock")
                playerScore++;
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log("You Win! Scissors beats Paper")
                playerScore++;
            } else if (playerSelection === 'scissors' && computerSelection === 'rock' ) {
                console.log("Computer Wins! Scissors beats Rock")
                computerScore++;
            } else if (playerSelection === 'rock' && computerSelection === 'paper' ) {
                console.log("Computer Wins! Paper beats Rock")
                computerScore++;
            } else if (playerSelection=== 'paper' && computerSelection === 'scissors') {
                console.log("Computer Wins! Paper beats Rock")
                computerScore++;
            } else if (playerSelection=== 'paper' && computerSelection === 'paper' ||
                       playerSelection=== 'rock' && computerSelection === 'rock' || 
                       playerSelection=== 'scissors' && computerSelection === 'scissors') {
                
                        console.log("Its a Draw!")
                        if (rounds > 1) {
                            rounds--;
                        }
            }


        }

        
    const playerSelection = prompt("Type Your Weapon - Rock or Paper or Scissors","rock");
    const computerSelection = computerPlay()
    
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Rounds: ${rounds}  Computer Score: ${computerScore}  Player Score: ${playerScore}`)

    rounds++;
        }
}

      game();
