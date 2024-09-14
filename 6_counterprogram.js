//Counter program

let decrease = document.getElementById("dec");
let increase = document.getElementById("inc");
let reset = document.getElementById("res");
let label = document.getElementById("answer");

let count = 0;

increase.onclick = function(){
    count++;
    label.textContent = count;
}

decrease.onclick = function(){
    count--;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}
