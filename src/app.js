import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const card = ["♠", "♦", "♣", "♥"].flatMap(s => ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"].map(r => ({ r, s }))).sort(() => Math.random() - .5).pop();
  document.querySelector("#card-container").innerHTML = `<div class="playing-card shadow ${"♥♦".includes(card.s) ? 'text-danger' : 'text-dark'}"><div class="card-corner top-left"><div>${card.r}</div><div>${card.s}</div></div><div class="card-center">${card.s}</div><div class="card-corner bottom-right"><div>${card.r}</div><div>${card.s}</div></div></div>`;
};