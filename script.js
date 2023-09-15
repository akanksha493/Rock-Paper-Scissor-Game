// import prompt form 'prompt-sync';

const choice = ["rock","paper","scissor"];
const resultDiv = document.querySelector("#result-container");
const computerChoiceDiv = document.querySelector("#computer-choice");
const playerChoiceDiv = document.querySelector("#player-choice");
 

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function playAudio(audio){
    audio.currentTime = 0;
    audio.play();
    // const playAgainBttn = document.querySelector("#play-again");
    // playAgainBttn.addEventListener('click',()=>{
    //     audio.pause();
    //     audio.currentTime = 0;
    // });
}


function play(playerSelection, computerSelection){
    result = "";
    score = 0;
    const imgRock = document.createElement("img");
    imgRock.src = "images/hand-rock.jpg"; 
    const imgPaper = document.createElement("img");
    imgPaper.src = "images/hand-paper.jpg"; 
    const imgScissor = document.createElement("img");
    imgScissor.src = "images/hand-scissor.jpg";
    // parent.removeChild(parent.firstChild);
    // console.log(computerChoiceDiv.firstChild);
    if(computerChoiceDiv.firstChild){
        computerChoiceDiv.removeChild(computerChoiceDiv.firstChild);
    }
    if(playerChoiceDiv.firstChild){
        playerChoiceDiv.removeChild(playerChoiceDiv.firstChild);
    }
    
    if(playerSelection == computerSelection){
        if(playerSelection == "rock"){
            playerChoiceDiv.appendChild(imgRock);
            computerChoiceDiv.appendChild(imgRock.cloneNode(true));
        }else if(playerSelection =="paper"){
            playerChoiceDiv.appendChild(imgPaper);
            computerChoiceDiv.appendChild(imgPaper.cloneNode(true));
        }else{//scissor
            playerChoiceDiv.appendChild(imgScissor);
            computerChoiceDiv.appendChild(imgScissor.cloneNode(true));
        }
        result = "Draw";
        score = -1;
    }
    else if(playerSelection == "rock"){
        playerChoiceDiv.appendChild(imgRock);
        if(computerSelection=="scissor"){
            computerChoiceDiv.appendChild(imgScissor);
            result = "You Won";
            score = 1;
        }
        else{
            computerChoiceDiv.appendChild(imgPaper);
            result = "You Loose"; 
        }
    }else if(playerSelection == "paper"){
        playerChoiceDiv.appendChild(imgPaper);
        if(computerSelection=="rock"){
            computerChoiceDiv.appendChild(imgRock);
            result = "You Won";
            score = 1;
        }
        else{
            computerChoiceDiv.appendChild(imgScissor);
            result = "You Loose";
        }
    }else{//scissor
        playerChoiceDiv.appendChild(imgScissor);
        if(computerSelection=="paper"){
            computerChoiceDiv.appendChild(imgPaper);
            result = "You Won";
            score = 1;
        }
        else{
            computerChoiceDiv.appendChild(imgRock);
            result = "You Loose";
        }
    }
    document.querySelector("#result").textContent = result;
    return score;
    
}
function playRound(){
    // const playerSelection = window.prompt("Enter your choice:");
    let playerScoreContainer = document.querySelector("#player-score");
    let computerScoreContainer = document.querySelector("#computer-score");
    playerScore = +playerScoreContainer.textContent;
    computerScore = +computerScoreContainer.textContent;
    const playerSelection = this.getAttribute('id');
    const computerSelection = getComputerChoice();
   
    score = play(playerSelection,computerSelection);
    if(score == 1){
        playerScore+=1;
        const audio = document.querySelector("#instant-win");
        playAudio(audio);
    }
    else if(score==0){
        computerScore+=1;
        const audio = document.querySelector("#instant-loss");
        playAudio(audio);
    }else{
        const audio = document.querySelector("#draw");
        playAudio(audio);
    }
    playerScoreContainer.textContent = playerScore;
    computerScoreContainer.textContent = computerScore;

    // REMEMBER TO CHANGE IT BACK TO 5 WINS 
    if(playerScore===5 ){
        document.querySelector("#final-result").textContent = "YOU WIN!";
        document.querySelector("#finalResult-container").style.visibility = "visible";
        const audio = document.querySelector("#win-audio");
        document.querySelector("#play-field").style.pointerEvents ="none";
        playAudio(audio);
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti();
    }
    if(computerScore===5){
        document.querySelector("#final-result").textContent = "YOU LOOSE";
        document.querySelector("#finalResult-container").style.visibility = "visible";
        const audio = document.querySelector("#loose-audio");
        playAudio(audio);
        document.querySelector("#play-field").style.pointerEvents ="none";
    }
   
}


const bttns = document.querySelectorAll(".bttn");
bttns.forEach((bttn)=>{
    bttn.addEventListener('click',playRound);
});

const playAgainBttn = document.querySelector("#play-again");
playAgainBttn.addEventListener("click",function(){
    const audio = document.querySelector("#bttn-click");
    playAudio(audio);
    document.querySelector("#finalResult-container").style.visibility = "hidden";
    document.querySelector("#player-score").textContent = "0";
    document.querySelector("#computer-score").textContent = "0";
    computerChoiceDiv.removeChild(computerChoiceDiv.firstChild);
    playerChoiceDiv.removeChild(playerChoiceDiv.firstChild);
    document.querySelector("#result").textContent = "Play Now";
    document.querySelector("#play-field").style.pointerEvents ="auto";
});


