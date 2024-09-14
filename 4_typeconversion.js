//Changing the datatype of a value to another is type conversion
/*
    Number()
    String()
    Boolean()
*/

//this would lead to string concatenation
let age = window.prompt("How old are you?")
age = Number(age);
age += 1; 
console.log(age, typeof age);

//conversion of a string 
let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x)
y = String(y)
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

/* Output 
    18 NaN 'number'
    19 pizza string
    20 true 'boolean'
*/