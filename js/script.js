
//Generate a random number between 1 and 6.
function rollDice(){
    number = Math.floor(Math.random() * 6) + 1;
    return number;
}

//Calculate score according to values of dice rolled
function calculateScore(numDice1, numDice2){
    if (numDice1 == 1 || numDice2 == 1){
        return 0;
    }
    else if(numDice1 == numDice2){
        score = (numDice1 + numDice2)*2
        return score;
    }
    else{
        score = numDice1 + numDice2
        return score;
    }
}

const game = {
    playerScore: 0,
    computerScore: 0,
    rounds: 3,
    currentRound: 0,

    initialize: function(playerScore, computerScore, rounds, currentRound){
        this.playerScore = playerScore;
        this.computerScore = computerScore;
        this.rounds = rounds;
        this.currentRound = currentRound;
    },

    rollDiceCalculateScore: function(){
        const playerDice1 = rollDice();
        const playerDice2 = rollDice();
        const computerDice1 = rollDice();
        const computerDice2 = rollDice();

        const playerRoundScore = calculateScore(playerDice1, playerDice2);
        const computerRoundScore = calculateScore(computerDice1, computerDice2);

        this.playerScore += playerRoundScore;
        this.computerScore += computerRoundScore;

        document.getElementById("player-dice1").src = `images/dice-${playerDice1}.png`;
        document.getElementById("player-dice2").src = `images/dice-${playerDice2}.png`;

        document.getElementById("computer-dice1").src = `images/dice-${computerDice1}.png`;
        document.getElementById("computer-dice2").src = `images/dice-${computerDice2}.png`;

        document.getElementById("player-round-score").textContent = playerRoundScore;
        document.getElementById("computer-round-score").textContent = computerRoundScore;

        document.getElementById("player-total-score").textContent = this.playerScore;
        document.getElementById("computer-total-score").textContent = this.computerScore;

        this.currentRound ++

        if(this.currentRound === this.rounds){
            if(this.playerScore > this.computerScore){
                winnerMessage = "Player wins!";
            }
            else if (this.playerScore < this.computerScore){
                winnerMessage = "Computer wins!";
            }
            else{
                winnerMessage = "It's a tie!"
            }

            document.getElementById("winner-message").textContent = winnerMessage;

            const winnerMessageElement = document.getElementById("winner-message");
            winnerMessageElement.textContent = winnerMessage;
            winnerMessageElement.classList.add("fade-in");
            
            document.getElementById("roll-button").disabled = true;
        }


    },

    resetGame: function(){
        this.playerScore = 0;
        this.computerScore = 0;
        this.currentRound = 0;

        document.getElementById("player-dice1").src = `images/dice-1.png`;
        document.getElementById("player-dice2").src = `images/dice-1.png`;

        document.getElementById("computer-dice1").src = `images/dice-1.png`;
        document.getElementById("computer-dice2").src = `images/dice-1.png`;

        document.getElementById("player-round-score").textContent = 0;
        document.getElementById("computer-round-score").textContent = 0;

        document.getElementById("player-total-score").textContent = 0;
        document.getElementById("computer-total-score").textContent = 0;

        document.getElementById("winner-message").textContent = "";

        document.getElementById("roll-button").disabled = false;
    }
};

document.getElementById("roll-button").addEventListener("click", function(){
    game.rollDiceCalculateScore();
});

document.getElementById("reset-button").addEventListener("click", function(){
    game.resetGame();
});