// import prompt form 'prompt-sync';

const choice = ["rock","paper","scissor"];

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function play(playerSelection, computerSelection){
    
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection=="scissor"){
            console.log("You Win! Rock beats Scissor");
        }
        else if(computerSelection=="rock"){
            console.log("It's a Draw")
        }
        else{
            console.log("You Loose :( Paper beats Rock");
        }
    }else if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection=="rock"){
            console.log("You Win! Rock beats Paper");
        }
        else if(computerSelection=="paper"){
            console.log("It's a Draw")
        }
        else{
            console.log("You Loose :( Scissor beats Paper");
        }
    }else{//scissor
        if(computerSelection=="paper"){
            console.log("You Win! Scissor beats Paper");
        }
        else if(computerSelection=="scissor"){
            console.log("It's a Draw")
        }
        else{
            console.log("You Loose :( Rock beats Scissor");
        }
    }
}


function playRounds(numberOfRounds){
    for(let i = 0;i<numberOfRounds;i++){
        const playerSelection = window.prompt("Enter your choice:");
        const computerSelection = getComputerChoice();
        play(playerSelection,computerSelection);
    }
}

const rounds =5;
playRounds(5);