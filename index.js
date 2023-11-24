const btns = document.querySelectorAll('button')
const res = document.querySelector('#result')
const user = document.querySelector('#user')
const computer = document.querySelector('#computer')

function getComputerChoice(){
    idx = Math.floor(Math.random()*3)
    if(idx == 0){
        return "✊"
    }
    else if (idx == 1){
        return "✋"
    }
    else if(idx == 2){
        return "✌️"
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === '✊' && computerSelection == '✌️'){
        return("You win! Rock beats scissor")
    }

    else if (playerSelection === '✋' && computerSelection == '✊'){
        return("You win! Paper beats rock")
    }

    else if(playerSelection === '✌️' && computerSelection == '✋'){
        return("You win! Scissor beats paper")
    }


    else if(playerSelection === '✌️' && computerSelection == '✊'){
        return("You win! Rock beats scissor")
    }

    else if(playerSelection === '✊' && computerSelection == '✋'){
        return("You lose! Paper beats rock")
    }


    else if(playerSelection === '✋' && computerSelection === '✌️'){
        return('You lose! Scissor beats paper!')
    }
    
    else if (playerSelection == computerSelection){
        return(`It is tie! ${playerSelection} tie ${computerSelection}`)
    }

}

const game = (ev)=>{
    const playerSelection = ev.target.value
    const computerSelection = getComputerChoice()
    user.textContent = `Your choice: ${playerSelection}`
    computer.textContent = `Home choice: ${computerSelection}`
    res.textContent = playRound(playerSelection, computerSelection)
}
for (const btn of btns) {
    btn.addEventListener('click', game);
  }

// game()



