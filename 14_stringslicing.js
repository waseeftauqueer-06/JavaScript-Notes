//string slicing => creating a substring from a portion of another string

const fullName = "Waseef Tauqueer"

let firstName = fullName.slice(0, 6); //waseef
let lastName = fullName.slice(7, 15); //Tauqueer

let firstchar = fullName.slice(0,1); //w
let lastChar = fullName.slice(-1); //r

let firstName2 = fullName.slice(0, fullName.indexOf(" "));

console.log(firstName)
console.log(lastName)
console.log(firstchar)
console.log(lastChar)
console.log(firstName2)

const email = "waseef1@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username)
console.log(extension);