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
    @Return String To let user know if they won the round or not
*/
function playRound(playerSelection, computerSelection){
    //toUpperCase() to correctly compare both strings
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();
    
    //if both have the same weapon, then tie
    if(player === computer){
        return "\tIt's a Tie!";
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

/*
    game() Function that starts a new game and returns the winner of the entire game
    @Return String To let user know if they won the game or not
*/
function game(){
    let playerPoints = 0; //to hold player points
    let computerPoints = 0; //to hold computer points

    //loop 5 times for 5 rounds per game
    for(let i = 0; i < 5; i++){
        let player = prompt("Rock, Paper, or Scissors?"); //get user input
        let computer = getComputerChoice(); //get computer input

        console.log("Round " + (i + 1)); //print round number
        let s = playRound(player, computer); //start round
        console.log(s); //display winner of round
        //if player wins, then add point
        if(s.includes('Win'))
            playerPoints++;
        //if computer wins, then add point
        else if(s.includes('Lose'))
            computerPoints++;
        //if tie, add point to both
        else if(s.includes('Tie')){
            computerPoints++;
            playerPoints++;
        }
        //if error, then error
        else
            return;
        console.log("Player " + playerPoints + " - " + computerPoints + " Computer");
    }
    //end loop

    //if player points is greater than computer points, then player wins
    if(playerPoints > computerPoints){
        return "You are the Winner!!! :D";
    }
    //if computer points is greater than player points, then computer wins
    else if(playerPoints < computerPoints){
        return "Better Luck Next Time! :(";
    }
    //else, it is a tie (should not be possible)
    else
        return "It's a tie..."
}

//start game
console.log(game());