
    let computerSelection;
    let playerSelection;
    
    let playerRes = 0;
    let computerRes = 0;
    
    
    /* FUNKCIJA KOJA GENERISHE POTEZ RACUNARA */
    
    function computerPlay (){
    randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 0){
    return "ROCK"
    }
    
    else if (randomNumber === 1){
    return "PAPER"
    }
    
    else {
    return "SCISSORS"
    }
    
    }
    
    
    /*JEDNA RUNDA*/
    
    function playRound () {
        
        
        computerSelection = computerPlay();
        
    
    if (playerSelection === "ROCK"){
    
        if (computerSelection === "ROCK"){return "DRAW"}
        else if (computerSelection === "PAPER"){computerRes++; return "YOU LOSE";}
        else if (computerSelection === "SCISSORS"){playerRes++; return "YOU WIN"; }
    }
    
    
    
    else if (playerSelection === "PAPER"){
    
        if (computerSelection === "PAPER"){return "DRAW"}
        else if (computerSelection === "SCISSORS"){computerRes++; return "YOU LOSE";}
        else if (computerSelection === "ROCK"){playerRes++; return "YOU WIN";}
    }
    
    
    
    else if (playerSelection === "SCISSORS"){
    
        if (computerSelection === "SCISSORS"){return "DRAW"}
        else if (computerSelection === "ROCK"){computerRes++; return "YOU LOSE"; }
        else if (computerSelection === "PAPER"){playerRes++; return "YOU WIN"; }
    }
    
    
    result.textContent = 'Current result is: Player ' + playerRes + '  Computer ' + computerRes ;
    
    
    }
    
    
    
    
    
    
    let result = document.querySelector(".result");
    result.textContent = 'Current result is: Player ' + playerRes + '  Computer ' + computerRes;
    
    
    let rockB = document.querySelector("#rock");
    let paperB = document.querySelector("#paper");
    let scissorsB = document.querySelector("#scissors");
    
    rockB.onclick = function(){
        
        playerSelection = "ROCK";
        playRound ();
        result.textContent = 'Current result is: Player ' + playerRes + '  Computer ' + computerRes;
    };

    paperB.onclick = function(){
        
        playerSelection = "PAPER";
        playRound ();
        result.textContent = 'Current result is: Player ' + playerRes + '  Computer ' + computerRes;
    };

    scissorsB.onclick = function(){
        
        playerSelection = "SCISSORS";
        playRound ();
        result.textContent = 'Current result is: Player ' + playerRes + '  Computer ' + computerRes;
    };