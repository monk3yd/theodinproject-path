// DOM ---
// Choice Results
const resultsContainer = document.querySelector("#results");
const paraPlayerResult = document.createElement("p");
const paraComputerResult = document.createElement("p");

// Score
const scoreContainer = document.querySelector("#score-container");
const paraScore = document.createElement("p");
const paraMessage = document.createElement("p");

// Computers turn
function computerPlay() {
    // Array of possible NPC plays
    let playsPossible = ["Rock", "Paper", "Scissors"];

    // Get random number between 0 and 2 inclusive
    const random = Math.floor(Math.random() * playsPossible.length);
    
    // console.log(random, playsPossible[random]);

    // Return random computer play 
    return playsPossible[random];
};

// Start a round (1 move each player)
function startRound(playerChoice, computerPlay) {
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = computerPlay().toLowerCase();

    // Clean older result
    paraPlayerResult.textContent = '';
    paraComputerResult.textContent = '';

    // Fill displayed result with player/computer choices
    paraPlayerResult.textContent = `Player makes: ${playerChoice}`;
    paraComputerResult.textContent = `Computer makes: ${computerChoice}`;

    // Show results
    resultsContainer.appendChild(paraPlayerResult);
    resultsContainer.appendChild(paraComputerResult);
    
    // Check for winner
    if (playerChoice === computerChoice) {
        // Draw
        return 0;
    } else if (playerChoice === "rock" && computerChoice === "scissors"  || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        // Player win
        return 1;
        // console.log(`Player wins round ${i + 1}`);
    } else {
        // PC win
        return 2;
        // console.log(`Computer wins round ${i + 1}`);
    };
};

function checkWinner(playerScore, computerScore) {
};

// Counter score variables
let playerScore = 0;
let computerScore = 0;

// Attach events to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let choice = e.target.innerText;
        let roundWinner = startRound(choice, computerPlay);

        // Score
        if (roundWinner === 1) {
            playerScore++;
        } else if (roundWinner === 2) {
            computerScore++;
        }
        paraScore.textContent = ``;
        paraScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
        scoreContainer.appendChild(paraScore);

        // Check for game over
        if (playerScore >= 5 || computerScore >= 5) {
            // Announce winnner
            if (playerScore > computerScore) {
                paraMessage.textContent = `Game Over! Player wins with a score of ${playerScore}.`;
            } else {
                paraMessage.textContent = `Game Over! Computer wins with a score of ${computerScore}.`;
            };
            scoreContainer.appendChild(paraMessage);
        }
    });
});
