// variable par default 
let winningScore = 2;
let playerScore = 0;
let computerScore = 0;
let world = 1;

// Array avec les différents choix possibles
jankenPlayersOptions = ["rock", "paper", "scissor"];


// Liste des personnages 



class Character {
    constructor(name, avatar, quotesFirstMeet, quotesDefeat, quotesWin) {
        this.name = name;
        this.avatar = avatar;
        this.quotesFirstMeet = quotesFirstMeet;
        this.quotesDefeat = quotesDefeat;
        this.quotesWin = quotesWin;
    }
}

const scorpiona = new Character(
    "scorpiona",
    "./images/avatar2.png",
    [
        "Damn you ugly",
    ],
    [
        "Can't believe it ugly man",
        "Whuuut ?",
        "Pffff"
    ],
    [
        "Ugly loser!",
        "Easy"
    ]
);


const killery = new Character(
    "killery",
    "./images/avatar3.png",
    [
        "You're dead",
    ],
    [
        "Next time...",
        "I'll wait for you",
        "I'm hungry"
    ],
    [
        "You're mine",
        "Come to me..."
    ]
);

const naruto = new Character(
    "naruto",
    "./images/avatar-naruto.png",
    [
        "You're dead",
    ],
    [
        "Next time...",
        "I'll wait for you",
        "I'm hungry"
    ],
    [
        "You're mine",
        "Come to me..."
    ]
);

let characters = [scorpiona,killery,naruto];





