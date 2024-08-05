// document.querySelector("body .container h1").style.fontSize=("5rem");  test code


//random number generation
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = 1+ Math.floor(randomNumber1);
console.log(randomNumber1);
//assign player one dice

document.querySelector("body .container .dice").lastElementChild.setAttribute("src","./images/dice"+randomNumber1+".png");


//random second number generation

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = 1+ Math.floor(randomNumber2);
console.log(randomNumber2);

//assign second player dice
document.querySelector("body .container .player2").lastElementChild.setAttribute("src","./images/dice"+randomNumber2+".png");


//telling whos the winner

if (randomNumber1 < randomNumber2 ){
    document.querySelector("body h1").textContent="🚩 player 2 wins !";

}

if (randomNumber1 > randomNumber2){
    document.querySelector("body h1").textContent="🚩 player 1 wins !";


}

if (randomNumber1 == randomNumber2){
    document.querySelector("body h1").textContent=" Draw 🚩 nobody wins !";

}





