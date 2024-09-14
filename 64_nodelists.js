/* Nodelist => Static collection of HTML elements by (id, class, element)
               Can be created by using querySelectorAll()
               Similar to an array, but no (map, filter, reduce)
               NodeList won't update to automatically reflect changes
*/
let buttons = document.querySelectorAll(".myButtons");
//styling the button
buttons.forEach(button => {
    button.style.backgroundColor = "blue";
    button.textContent += " Run!"
});
//styling using eventlistener
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "yellow";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "blue";
    });
});

//add an element
// Not present in the nodelist
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

//reselect the elements to add to the nodelist
buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

//remove an element
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    })
})