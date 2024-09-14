/*
    => = assignment operator
    => == comparison operator
    => === strict equlaity operator (compare only if values and datatype are equal)
    => != inequality operator
    => !== strict inequality operator
*/

let x = 5; // Assignment Operator (=)
let y = '5';

// Comparison Operator (==)
if (x == y) {
    console.log("x is equal to y using == (Comparison Operator)"); // This will be logged because 5 == '5' is true
} else {
    console.log("x is not equal to y using ==");
}

// Strict Equality Operator (===)
if (x === y) {
    console.log("x is strictly equal to y using === (Strict Equality Operator)");
} else {
    console.log("x is not strictly equal to y using === (Strict Equality Operator)"); // This will be logged because 5 !== '5'
}

// Inequality Operator (!=)
if (x != y) {
    console.log("x is not equal to y using != (Inequality Operator)");
} else {
    console.log("x is equal to y using != (Inequality Operator)"); // This will be logged because 5 == '5' is true
}

// Strict Inequality Operator (!==)
if (x !== y) {
    console.log("x is not strictly equal to y using !== (Strict Inequality Operator)"); // This will be logged because 5 !== '5' is true
} else {
    console.log("x is strictly equal to y using !== (Strict Inequality Operator)");
}
