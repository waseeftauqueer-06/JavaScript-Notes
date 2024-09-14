/* spread operator => ...allows an iterable such as an
                        array or string to be expanded
                        into seperate elements
                        (unpacks the elements)
*/

let numbers = [1,2,3,4,5];
/*let maximum = Math.max(numbers); //we can't place an array directly into the 
                                    math method, results in NaN*/

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);                                    
console.log(maximum);
console.log(minimum);

//ops on strings
let username = "Waseef Tauqueer";
let letters = [...username].join("-"); //this spreads the chars
console.log(letters);

//combine arrays
let fruits  = ["apple", "orange", "banana"];
let vegetables = ["Carrots", "Tomato", "Potato"];
let newFruits = [...fruits];
let foods = [...fruits, ...vegetables]; //combines both array (else it becomes , seperated arrays)
console.log(newFruits);
console.log(foods)