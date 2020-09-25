// Getting HTML elements 
const creditsHTML = document.querySelector(".nav--credits");
const aboutHTML = document.querySelector(".nav--about");
const playerSelectionHTML = document.querySelector(".playerSelection")
const rockHTML = document.querySelector(".playerSelection-btn--rock");
const paperHTML = document.querySelector(".playerSelection-btn--paper");
const scissorHTML = document.querySelector(".playerSelection-btn--scissor");
const worldHTML = document.querySelector(".player-result--world");
const resultHTML = document.querySelector(".player-result--score");
const battleHTML = document.querySelector(".battle");
const menuHTML = document.querySelector(".playerSelection-btn--menu");
const nextHTML = document.querySelector(".playerSelection-btn--next");
const computerAvatarHTML = document.querySelector("#computerAvatar");
const computerNameHTML = document.querySelector("#computerName");

// Testing the querySelector
// console.log(creditsHTML);
// console.log(aboutHTML);
// console.log(playerSelectionHTML);
// console.log(rockHTML);
// console.log(paperHTML);
// console.log(scissorHTML);
// console.log(worldHTML);
// console.log(resultHTML);
// console.log(battleHTML);


// Adding EventListener to HTML elements
rockHTML.addEventListener("click", onClickRockSelected);
paperHTML.addEventListener("click", onClickPaperSelected);
scissorHTML.addEventListener("click", onClickScissorSelected);
nextHTML.addEventListener("click", onclickNextButton);

// Affichage par default à l'écran
worldHTML.innerHTML = "World 1"
resultHTML.innerHTML = `0 : 0`;

// Passe true et termine la partie en cours quand l'un des joueurs a atteint le score max 
let endGame = false;

// letiable qui contiendra la sélection du joueur 
let playerSelection = '';


// Fonction Janken 
function janken(selection) {
    let computerRandomChoice = jankenPlayersOptions[Math.floor(Math.random() * jankenPlayersOptions.length)];
    // console.log(`Computer selection is: ${computerRandomChoice}`);
    // console.log(`Player selection is: ${selection}`);
    // if (!endGame) {
    switch (selection) {
        case computerRandomChoice:
            // console.log(`It's a withdraw`)
            result = "withdraw";
            break;
        case "rock":
            if (computerRandomChoice == "scissor") {
                playerScore++;
                result = `${playerSelection} defeats ${computerRandomChoice}. You win.`;
                break;
            }
            else {
                computerScore++;
                result = `${computerRandomChoice} defeats ${playerSelection} . You lose.`;
                break;
            }
        case "paper":
            if (computerRandomChoice == "rock") {
                playerScore++;
                result = `${playerSelection} defeats ${computerRandomChoice}. You win.`;
                break;
            } else {
                computerScore++;
                result = `${computerRandomChoice} defeats ${playerSelection} . You lose.`;
                break;
            }
        case "scissor":
            if (computerRandomChoice == "paper") {
                playerScore++;
                result = `${playerSelection} defeats ${computerRandomChoice}. You win.`;
                break;
            }
            else {
                computerScore++;
                result = `${computerRandomChoice} defeats ${playerSelection} . You lose.`;
                break;
            }
        default:
            result = "OMG what did you do ?"
            break;
    }
    resultHTML.innerHTML = `${playerScore} : ${computerScore}`;
    battleHTML.innerHTML = result;
    checkIfSomeoneWin();

}






// Fonction utilisé pour savoir si l'ordinateur a atteint le score final en premier 
// function checkComputerWin(score) {
//     resultHTML.innerHTML = `${playerScore} : ${computerScore}`;
//     console.log(computerScore)
//     if (computerScore === winningScore) {
//         result = "LOSER"
//         battleHTML.innerHTML = result;
//         return endGame = true;
//         // cacher les playerSelection et remplacer par voulez vous recommencer
//         // envoyer un son si il continue ou pas 
//         // console.log(`Computer won my friend. Why did you choose ${playerSelection}? 😱`)


//     }
// };


// function si tu perd, cacher les boutons et changer l'image de celle du centre


// TO DO : 
// ✅ Augmenter les scores 
// Générer le result dans le HTML, attention il y a un affichage pour le joueur et un pour l'ordi

// fonction pour tester si la partie est terminé avec end 
// fonction pour la victoire et qui check le end
// ✅ Pas besoin de check victoire ET défaite comme le withdraw est la, donc retirer le "if" de else if si possible
// fonction qui reset le score et change le personnage a affronter (potentiellement retirer l'utilisation du end qui servirai a rien)
// Pour modifier le numéro du combat, incrémenter une letiable dans la fonction victoire 
// A chaque fois qu'on gagne, il dit "I am batman"  
// Faire une fonction pour demander s'il veut continuer ? si oui ca remet les compteurs a zero et le score fight augmente, si non on retourne au menu
// ca pourrait cacher les choix pour pas qu'il clique dessus...


// Si on gagne un round, afficher un message dans le champs battlefield qui contient : 
//  Le message de défaite de l'ordi + un bouton pour continuer
    // Quand on clique sur continuer, on passe à l'adversaire suivant


// Créer une classe pour les personnages
// Faire des news pour ajouter les personnages 


// Créer la fonction qui cache les boutons et propose de continuer 


// Créer les affichages par default world score a coup de innerHTML 


// Personnage possible :

// Batman 
// MacGyver 