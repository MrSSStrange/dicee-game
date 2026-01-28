function rollDice() {
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = "./images/dice" + dice1 + ".png";
document.querySelector(".img2").src = "./images/dice" + dice2 + ".png";

if (dice1 > dice2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (dice2 > dice1) {
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}
}
document.getElementById("rollBtn").addEventListener("click", rollDice);