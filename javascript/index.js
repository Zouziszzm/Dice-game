
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "/images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.getElementsByClassName("Dimg")[0];

image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "/images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("Dimg")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
  var d = document.querySelectorAll("img")[1];
  d.style.visibility="hidden";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  var d = document.querySelectorAll("img")[0];
  d.style.visibility="hidden";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
