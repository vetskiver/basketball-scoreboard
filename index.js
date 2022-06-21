let homeScore = 0
let homeScoreEl = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

