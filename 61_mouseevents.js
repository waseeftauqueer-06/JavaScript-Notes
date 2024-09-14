/* eventListener = Listen for specific events to create interactive
                   web pages.
                   events : click, mouseover, mouseout
                   .addEventListener(event, callback / anonymous func / arrow function)
*/

const myBox = document.getElementById("myBox");

/*function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕"
}

myBox.addEventListener("click", changeColor);*/

myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕"
})

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕"
})

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it! 🥺"
})

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 🥺"
})