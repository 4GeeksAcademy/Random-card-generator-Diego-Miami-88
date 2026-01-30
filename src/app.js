import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const drawCard = () => {
  const suits = ["♠", "♦", "♣", "♥"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  // Value mapping to determine which side is higher
  const rankValues = { "A": 14, "K": 13, "Q": 12, "J": 11, "10": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2 };

  const secondCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const color = "♥♦".includes(suit) ? "red" : "black";
    
    const rankElements = document.querySelectorAll(".rank-second");
    const suitElements = document.querySelectorAll(".suit-second");
    const centerElement = document.querySelector(".card-center-second h1");

    rankElements.forEach(el => el.textContent = rank);
    suitElements.forEach(el => el.textContent = suit);
    centerElement.textContent = suit;

    [...rankElements, ...suitElements, centerElement].forEach(el => {
      el.style.color = color;
    });

    return rank; // Return rank to compare
  };

  const rank2 = secondCard();

  // First card logic
  const suit1 = suits[Math.floor(Math.random() * suits.length)];
  const rank1 = ranks[Math.floor(Math.random() * ranks.length)];
  const color1 = "♥♦".includes(suit1) ? "red" : "black";
  
  const rankElements1 = document.querySelectorAll(".rank");
  const suitElements1 = document.querySelectorAll(".suit");
  const centerElement1 = document.querySelector(".card-center");

  rankElements1.forEach(el => el.textContent = rank1);
  suitElements1.forEach(el => el.textContent = suit1);
  centerElement1.textContent = suit1;

  [...rankElements1, ...suitElements1, centerElement1].forEach(el => {
    el.style.color = color1;
  });

  // NEW: Comparison Function Logic
  const titleDisplay = document.querySelector("#gameMiniTitle h2");
  if (rankValues[rank1] > rankValues[rank2]) {
    titleDisplay.textContent = "Left Side Wins!";
  } else if (rankValues[rank1] < rankValues[rank2]) {
    titleDisplay.textContent = "Right Side Wins!";
  } else {
    titleDisplay.textContent = "It's a Tie!";
  }
};

const balloonPopper = document.querySelector('#ballon-pop');
const colors = ['red', 'blue', 'green', 'yellow']
let balloonsRemaining = 0;

window.onload = () => {
  const refreshBtn = document.querySelector(".btn-info");
  refreshBtn.addEventListener("click", (event) => {
    event.preventDefault();
    drawCard();
    refreshBalloons();
  });

  drawCard();
  for (let i = 0; i < 6; i++) {
    createBalloon()
  }
};

function createBalloon() {
    const balloon = document.createElement('div')
    balloon.style.backgroundColor = 'red'
    balloon.style.borderRadius = '50%'
    balloon.style.width = '25%'
    balloon.style.aspectRatio = "1 / 1"
    balloon.style.backgroundColor = getRandomColor()
    balloon.className = 'col-3'
    balloon.addEventListener("click", function (e) {
      makeBalloonDisappear(balloon)
    })
    balloonPopper.appendChild(balloon)
    balloonsRemaining++;
  }

function refreshBalloons() {
  balloonPopper.innerHTML = '';
  balloonsRemaining = 0;
  for (let i = 0; i < 6; i++) {
    createBalloon();
  }
}

function makeBalloonDisappear(balloon) {
  balloon.style.backgroundColor = null
  balloonsRemaining--;
  if (balloonsRemaining === 0) {
    alert("You popped all the balloons! Game Over!");
  }
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex]
}
