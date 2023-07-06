function getComputerChoice(){
    const rand = Math.floor(Math.random() * 3);

    if(rand === 0)
        return "Rock";
    else if(rand === 1)
        return "Paper";
    else
        return "Scissors";
}