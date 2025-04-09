import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numbers = ["A","2","4","6","8","10","J","K","Q"];
  const simbols = ["Diamonds", "Spades", "Hearts", "Clubs"];




//generamos un numero aleatorio para el array numérico rojo
  const number = Math.floor(Math.random()* numbers.length );
//guardamos el numero aleatorio en una constante
  const randomNumberRoullette = numbers[number];


//generamos un aleatorio para los simbolos
  const symbol = Math.floor(Math.random()* simbols.length );
//guardamos el simbolo aleatorio en una constante
  const randomSymbol = simbols[symbol];
  

//aplicamos los numeros y simbolos random a la targeta
document.getElementById("num-top").innerText = randomSymbol;
document.getElementById("num-card").innerText = randomNumberRoullette;
document.getElementById("num-bottom").innerText = randomSymbol;

 
//si el numero generado esta dentro del array...lo devuelve rojo, el resto será negro
function getSuiteClass(simbols) {
  switch (simbols) {
    case "Diamonds": return "suit-diamonds";
    case "Spades": return "suit-spades";
    case "Hearts": return "suit-hearts";
    case "Clubs": return "suit-clubs";
  }
}


};
