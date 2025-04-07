import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numbers = ["A","2","4","6","8","10","J","K","Q"];
  const symbols = ["♦", "♥", "♠", "♣"];




//generamos un numero aleatorio para el array numérico rojo
  const number = [Math.floor(Math.random()* 9];

  
//generamos un aleatorio para los simbolos
  const symbol = [Math.floor(Math.random()* 4];
  
//guardamos el numero aleatorio en una constante
  const randomNumberRoullette = getRandomRoullette;

//aplicamos los numeros y simbolos random a la targeta
document.getElementById("num-top").innerText = getRandomsymbol;
document.getElementById("num-card").innerText = getRandomRoullette;
document.getElementById("num-bottom").innerText = getRandomsymbol;

 
//si el numero generado esta dentro del array...devuelve rojo, el resto será negro
  function getColorByNumber(randomNumberRoullette){
    if(redNumbers.includes(randomNumberRoullette)){
      return 'red'
    }
    return 'black'
  }

  //guardo la condición dentro de una constante
  const ColorByNumber = getColorByNumber(randomNumberRoullette);


  document.getElementById('roullette-number').innerText = randomNumberRoullette;
  document.getElementById('roullette-number').classList.add(ColorByNumber);



};
