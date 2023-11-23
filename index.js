function getComputerChoice(){
    idx = Math.floor(Math.random()*3)
    if(idx == 0){
        return "Rock"
    }
    else if (idx == 1){
        return "Paper"
    }
    else if(idx == 2){
        return "Scissor"
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === 'rock' && computerSelection == 'scissor'){
        console.log("You win! Rock beats scissor")
    }

    else if (playerSelection === 'paper' && computerSelection == 'rock'){
        console.log("You win! Paper beats rock")
    }

    else if(playerSelection === 'scissor' && computerSelection == 'paper'){
        console.log("You win! Scissor beats paper")
    }


    else if(playerSelection === 'scissor' && computerSelection == 'rock'){
        console.log("You win! Rock beats scissor")
    }

    else if(playerSelection === 'rock' && computerSelection == 'paper'){
        console.log("You lose! Paper beats rock")
    }


    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log('You lose! Scissor beats paper!')
    }

}

const game = ()=>{
    for (let i = 0;i < 5; i++){
        const playerSelection = prompt('Enter your choice from paper, rock, scissor: ')

        const computerSelection = getComputerChoice().toLowerCase()

        console.log(playRound(playerSelection, computerSelection))
    }
}

game()



