//random number generator
//Math.random()
const mybutton = document.getElementById("roll");
const myLabel = document.getElementById("numlabel");

const min = 1; const max = 6;

let randomNum;

mybutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}