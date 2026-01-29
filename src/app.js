import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const drawCard = () => {
  const secondCard = () => {
    const suits = ["♠", "♦", "♣", "♥"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Logic: Pick random card data
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const color = "♥♦".includes(suit) ? "red" : "black";
    // Target all elements that need updating creating vars for each type rank, suit, center
    const rankElements = document.querySelectorAll(".rank-second");
    const suitElements = document.querySelectorAll(".suit-second");
    const centerElement = document.querySelector(".card-center-second h1"); // selector for h1 inside card-center-second

    // Apply text and color to all elements at once
    // el = element
    rankElements.forEach(el => el.textContent = rank);
    suitElements.forEach(el => el.textContent = suit);
    centerElement.textContent = suit;

    // style update via a loop
    [...rankElements, ...suitElements, centerElement].forEach(el => {
      el.style.color = color;
    });
  };
  // Call the second card function
  secondCard();
  // ...existing code...
  const suits = ["♠", "♦", "♣", "♥"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Logic: Pick random card data
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  const color = "♥♦".includes(suit) ? "red" : "black";
  // Target all elements that need updating creating vars for each type rank, suit, center
  const rankElements = document.querySelectorAll(".rank");
  const suitElements = document.querySelectorAll(".suit");
  const centerElement = document.querySelector(".card-center");

  // learn that this Apply text and color to all elements at once
  // el = element
  rankElements.forEach(el => el.textContent = rank);
  suitElements.forEach(el => el.textContent = suit);
  centerElement.textContent = suit;

  // style update via a loop
  [...rankElements, ...suitElements, centerElement].forEach(el => {
    el.style.color = color;
  });
};
 // added to keep track of remaining balloons

/**
window.onload ensures the script waits for your HTML.
 */
const balloonPopper = document.querySelector('#ballon-pop');
const balloonColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan']
const colors = ['red', 'blue', 'green', 'yellow']
let balloonsRemaining = 0;
// event listener for the button
window.onload = () => {
  const refreshBtn = document.querySelector(".btn-info");

  refreshBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents refrshing the page
    drawCard();             // Generates a new card without reloading
    refreshBalloons();      // Refresh balloons too
  });

  drawCard(); // Initial call to show a card immediately
  
  // Ballon creation loop
  for (let i = 0; i < 6; i++) {
    createBalloon()
  }
};
// created the function to create the balloon
function createBalloon() {
    // bellow is the var that i created and the one im gonna be using inside the appendChild 'balloon'
    const balloon = document.createElement('div')
    //this is how i style using .css bellow to line 19 
    balloon.style.backgroundColor = 'red'
    balloon.style.borderRadius = '50%'
    balloon.style.width = '25%'
    // This property ensures that the element maintains a perfect square shape
    balloon.style.aspectRatio = "1 / 1" // "1/1 means aspect ratio foces HTML elment to maintain 1:1 ascpect ratio"
    balloon.style.backgroundColor = getRandomColor()
    balloon.className = 'col-3'
    balloon.addEventListener("click", function (e) {
      // we add the parameter balloon with function name //Pass the event target to ensure we are referencing the clicked element
      makeBalloonDisappear(balloon)
    })
    //  this how i added to the balloonPopper 'div'
    balloonPopper.appendChild(balloon)
    balloonsRemaining++; // added Increment count when a balloon is created
  }

function refreshBalloons() {
  // Clear all balloons
  balloonPopper.innerHTML = '';
  // Reset counter
  balloonsRemaining = 0;
  // Create new balloons
  for (let i = 0; i < 6; i++) {
    createBalloon();
  }
}
   function makeBalloonDisappear(balloon) {
    balloon.style.backgroundColor = null
    balloonsRemaining--; // Decrement count when popped
    console.log(`Balloons left: ${balloonsRemaining}`);
    // Optional: Check if all balloons are popped by the user
    if (balloonsRemaining === 0) {
      alert("You popped all the balloons! Game Over!");
    }
  }
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
  }

function determineGamePreference() {
    // We can tell they like these specific games from the image items
    const gamesLiked = ["Animal Crossing", "Zelda", "Minecraft/Voxel Worlds", "Pikmin"];
    let satisfactionLevel = 0;

    console.log("Analyzing the gaming setup...");

    // Using a descriptive 'for' loop to check each game
    for (let currentFavorite of gamesLiked) {
        if (currentFavorite === "Zelda" || currentFavorite === "Pikmin") {
            satisfactionLevel += 10; // High satisfaction for these classics!
        } else {
            satisfactionLevel += 5;
        }
        console.log(`They have a high chance of liking: ${currentFavorite}`);
    }

    // A slightly silly, descriptive conditional
    if (satisfactionLevel > 15) {
        return `It is highly likely that they are a serious gamer! Games liked score: ${satisfactionLevel}/40`;
    } else {
        return "They might just be a casual player.";
    }
}
console.log(determineGamePreference(drawCard()));