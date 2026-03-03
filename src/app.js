import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const drawCard = () => { // this initiates the fuction drawCrad()
  const suits = ["♠", "♦", "♣", "♥"]; // creates the array for symbols
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // defines the 23 posible values 
  
  // Value mapping to determine which side is higher
  const rankValues = { "A": 14, "K": 13, "Q": 12, "J": 11, "10": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2 };

  const secondCard = () => { //assigning numerical values
    const suit = suits[Math.floor(Math.random() * suits.length)]; // pick random item from prevuisly defined arrays
    const rank = ranks[Math.floor(Math.random() * ranks.length)]; // pick random value
    const color = "♥♦".includes(suit) ? "red" : "black"; // sets the color if the suit is a hear or dimond. if so it sets the color to "red"
    
    const rankElements = document.querySelectorAll(".rank-second"); //this set the HTML elements using querySelectorAll to find evry element on the page with classes
    const suitElements = document.querySelectorAll(".suit-second"); // .rank-second and suit-second allows you to update multiple stops on the card like (top left bottom right) in the HTML 
    const centerElement = document.querySelector(".card-center-second h1");

    rankElements.forEach(el => el.textContent = rank);
    suitElements.forEach(el => el.textContent = suit);
    centerElement.textContent = suit; // .forEach  it loops thourgh the elements and sets their textContent

    [...rankElements, ...suitElements, centerElement].forEach(el => {
      el.style.color = color; //here is an example of an spread operator to combine all those elements intoone list and changes their element style.color
    });

    return rank; // Return html return 
  };

  const rank2 = secondCard(); // returns the card on the right and returns its rank 

  // First card logic
  const suit1 = suits[Math.floor(Math.random() * suits.length)];
  const rank1 = ranks[Math.floor(Math.random() * ranks.length)];
  const color1 = "♥♦".includes(suit1) ? "red" : "black"; //rankValues lookup the table (object) it concerts strings like "A" or "K" -"14" or "13" into numbers this allows the computer to do math and determine that an Ace beats a King 
  
  const rankElements1 = document.querySelectorAll(".rank");
  const suitElements1 = document.querySelectorAll(".suit"); // we use querySelector here to find every instance of a class ( like .rank)
  const centerElement1 = document.querySelector(".card-center"); // 

  rankElements1.forEach(el => el.textContent = rank1);
  suitElements1.forEach(el => el.textContent = suit1);
  centerElement1.textContent = suit1;

  [...rankElements1, ...suitElements1, centerElement1].forEach(el => {
    el.style.color = color1;
  });

  // NEW: Comparison Function Logic
  const titleDisplay = document.querySelector("#gameMiniTitle h2"); 
    titleDisplay.textContent = "Left Side Wins!";
  } else if (rankValues[rank1] < rankValues[rank2]) {
  if (rankValues[rank1] > rankValues[rank2]) {
    titleDisplay.textContent = "Right Side Wins!";
  } else {  // we use if else here to handle the comparison between Rank 1 and Rank 2 to anounce the winner
    titleDisplay.textContent = "It's a Tie!";
  }
};

const balloonPopper = document.querySelector('#ballon-pop'); // this will targe the HTML element where the ballons will show
const colors = ['red', 'blue', 'green', 'yellow'] // colors to pick from getRandom() pulss from 
let balloonsRemaining = 0; // this is your state tracker i use let becuse it must be changeble it increasines when i spam the ballons and drecresesss when i popped them 

window.onload = () => { //window.onload ensures the code only runs once the HTML is fully loaded preventing errors.
  const refreshBtn = document.querySelector(".btn-info");
  refreshBtn.addEventListener("click", (event) => { // event.preventDfault() stops the page from doing a hard relod alloing javascript to smoothly reset the cards and ballons
    event.preventDefault();
    drawCard();
    refreshBalloons();
  });

  drawCard();
  for (let i = 0; i < 6; i++) {
    createBalloon() // this function builds a div from scratch using document..createElement. 
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
      makeBalloonDisappear(balloon) // event listner it removes the bg color making it invisible or popped
    })                              
    balloonPopper.appendChild(balloon)
    balloonsRemaining++;
  }

function refreshBalloons() {
  balloonPopper.innerHTML = ''; // this wipes the slate clean "it deletes every ballon Div currently inside the container
  balloonsRemaining = 0; // this resets your counter to zero this is crusial because createBallon() increments this number without reseting it here
  for (let i = 0; i < 6; i++) { //for loop it runs 6 times to call createBallon
    createBalloon();
  }
}

function makeBalloonDisappear(balloon) {
  balloon.style.backgroundColor = null
  balloonsRemaining--;                    // it substract from the ballonsRemainingcounter
  if (balloonsRemaining === 0) {
    alert("You popped all the balloons! Game Over!");// it checks if the counter is zero and triggers a game over allert()
  }
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex] // getRadomColor pulls the string from colors array 
}
