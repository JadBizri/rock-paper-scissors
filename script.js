/*
    getComputerChoice() Function that returns a random string between rock paper scissors
    @Return String Computer's weapon choice
*/
function getComputerChoice(){
    const rand = Math.floor(Math.random() * 3); //to hold either 0, 1, or 2

    if(rand === 0)
        return "Rock";
    else if(rand === 1)
        return "Paper";
    else
        return "Scissors";
}

/*
    playRound() Function that starts a round of the game and returns the winner
    @Return String To let user know if they won or not
*/
function playRound(playerSelection, computerSelection){
    //toUpperCase() to correctly compare both strings
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();
    
    //if both have the same weapon, then tie
    if(player === computer){
        return "It's a Tie!";
    }
    //if user has rock...
    else if(player === 'ROCK'){
        //...and computer has paper, then user loses
        if(computer === 'PAPER')
            return "You Lose! Paper beats Rock!";
        //...and computer has scissors, then user wins
        else
            return "You Win! Rock beats Scissors!";
    }
    //if user has paper...
    else if(player === 'PAPER'){
        //...and computer has rock, then user wins
        if(computer === 'ROCK')
            return "You Win! Paper beats Rock!";
        //...and computer has scissors, then user loses
        else
            return "You Lose! Scissors beat Paper!";
    }
    //if user has scissors...
    else if(player === 'SCISSORS'){
        //...and computer has paper, user wins
        if(computer === 'PAPER')
            return "You Win! Scissors beat Paper!";
        //...and computer has rock, user loses
        else
            return "You Lose! Rock beats Scissors!";
    }
    //if user has wrong input, then error
    else
        return "Error: Player did not choose weapon correctly."
}

const player = 'paer';
const computer = getComputerChoice();
console.log("Player: " + player);
console.log("Computer: " + computer);
console.log(playRound(player, computer));