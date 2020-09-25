// Fonction pour cacher / afficher les options en fonction du score 
function onClickRockSelected() {
    playerSelection = "rock";
    janken(playerSelection);
}

function onClickPaperSelected() {
    playerSelection = "paper";
    janken(playerSelection);
}

function onClickScissorSelected() {
    playerSelection = "scissor";
    janken(playerSelection);
}

function winnerOptions(){
    rockHTML.classList.add("showHide");
    paperHTML.classList.add("showHide");
    scissorHTML.classList.add("showHide");
    menuHTML.classList.remove("showHide");
    nextHTML.classList.remove("showHide");
}

function onclickNextButton(){
    rockHTML.classList.remove("showHide");
    paperHTML.classList.remove("showHide");
    scissorHTML.classList.remove("showHide");
    menuHTML.classList.add("showHide");
    nextHTML.classList.add("showHide");
    winnerResetScore();
    changeComputer();
}

// Reset des scores en fonction du résultat
function winnerResetScore() {
    playerScore = 0;
    computerScore = 0;
    world++;
    worldHTML.innerHTML = `World ${world}`
    resultHTML.innerHTML = `${playerScore} : ${computerScore}`;
}

function loserResetScore() {
    playerScore = 0;
    computerScore = 0;
    world = 1;
    worldHTML.innerHTML = `World ${world}`
    resultHTML.innerHTML = `${playerScore} : ${computerScore}`;
}


// Check qui a gagné en premier
function checkIfSomeoneWin() {
    if (playerScore === winningScore) {
        result = "VICTORY"
        battleHTML.innerHTML = result;
        winnerOptions();
    }
    else if (computerScore === winningScore) {
        result = "LOSER"
        battleHTML.innerHTML = result;
        loserResetScore();
    }
};

// Changement aléatoire de l'ordinateur 
function changeComputer(){
    let computerCharacter = characters[Math.floor(Math.random() * characters.length)];
    computerNameHTML.innerHTML = computerCharacter.name;
    computerAvatarHTML.src = computerCharacter.avatar;
}

