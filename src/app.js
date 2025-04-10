import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const numbers = ["A", "2", "4", "6", "8", "10", "J", "K", "Q"];
  const symbols = ["♦", "♥", "♠", "♣"];

  // Generamos un número aleatorio del array de números
  const number = Math.floor(Math.random() * numbers.length);
  const randomNumberRoullette = numbers[number];

  // Generamos un símbolo aleatorio
  const symbol = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[symbol];

  // Capturamos los elementos del DOM
  const topEl = document.getElementById("num-top");
  const cardEl = document.getElementById("num-card");
  const bottomEl = document.getElementById("num-bottom");

  // Aplicamos los valores a la carta
  topEl.innerText = randomSymbol;
  cardEl.innerText = randomNumberRoullette;
  bottomEl.innerText = randomSymbol;

  // Aplicamos el color
  getColorBitch(randomSymbol, topEl, cardEl, bottomEl);

  // Función que define el color según el símbolo
  function getColorBitch(symbol, topEl, cardEl, bottomEl) {
    if (symbol === "♦" || symbol === "♥") {
      topEl.style.color = "red";
      cardEl.style.color = "red";
      bottomEl.style.color = "red";
    } else {
      topEl.style.color = "black";
      cardEl.style.color = "black";
      bottomEl.style.color = "black";
    }
  }
};
