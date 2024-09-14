// const - a variable that can't be changed

let PI = 3.14159;
let radius;
let circumference;

PI = 132; //This won't reassign the value of PI

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("radiinp").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("answer").textContent = `The circumference is ${circumference} cm`;
}