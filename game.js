let team1Score = 0;
let team2Score = 0;
let currentRound = 1;
let countdownInterval;

// Initialize Game
document.getElementById('start-game').addEventListener('click', function() {
    startGame();
});

function startGame() {
    document.getElementById('countdown').style.display = 'block';
    startTimer();
}

function startTimer() {
    let timeLeft = 30;
    countdownInterval = setInterval(function() {
        document.getElementById('time-left').innerText = timeLeft;
        document.getElementById('timer').value = (30 - timeLeft) * 3.33;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    alert('Game Over!');
    // Reset game here or add more logic
}

document.getElementById('answer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let answer = document.querySelector('input[name="answer"]').value;
    validateAnswer(answer);
});

function validateAnswer(answer) {
    let correctAnswers = ["apple", "banana", "grape", "orange"];
    if (correctAnswers.includes(answer.toLowerCase())) {
        document.getElementById('results').innerHTML += `<p>${answer}: Correct!</p>`;
        updateScore(10);
    } else {
        alert('Incorrect answer!');
    }
}

function updateScore(points) {
    team1Score += points;
    document.getElementById('team1-score').innerText = team1Score;
}
