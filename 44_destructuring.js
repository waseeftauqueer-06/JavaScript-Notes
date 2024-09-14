/* destructuring => extract values from arrays and objects,
   then assign them to variables in a convenient way
   [] = to perform array destructing
   {} = to perform object destructing
*/

//Example 1
let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

//Example 2
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//Example 3 - Assign array elements to variables
const[firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//Example 4 - Extract values from objects
const person1 = {
    firstName : "Jesse",
    lastName : "Pinkman",
    age : 24,
    job : "Meth Dealer",
}
const person2 = {
    firstName : "Walter",
    lastName : "White",
    age : 50,
    job : "Meth Cook",
}

//values destructed can have default values
const {firstName, lastName, age, job = "Unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//Example 5 - Destructure in function parameters

function displayPerson({firstName, lastName, age, job}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`);
}

displayPerson(person2);