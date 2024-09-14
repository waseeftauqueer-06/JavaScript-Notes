//var - oldest method and function scoped
//let - block scoped variables
//const - block scoped and cannot be reassigned

//variables - Number
let age = 25
let gpa = 8.7
console.log(gpa)
console.log(typeof gpa)
console.log(`you are   ${age} `);
console.log(typeof age);

//variables - String
let firstname = "waseef";
console.log(firstname);
let favfood = "Biriyani"
console.log(`My fav food ${favfood}`)

//variables - Boolean
let online = true;
let carforsale = false;
console.log(`Bro is online - ${online}`)
console.log(`Is this car for sale ? ${carforsale}`)

//variables - task
let fullname = "Waseef Tauqueer";
let age1 = 19;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `Your age is ${age1}`;
document.getElementById("p3").textContent = `You are a ${student}`;
