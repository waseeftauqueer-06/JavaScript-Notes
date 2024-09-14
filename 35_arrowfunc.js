/* arrow function => a concise way to write function expressions
                    good for simple functions that you use
                    only once.
                    (parameters) => some code
*/
// Example 1
const hello = () => console.log("Hello");
hello();

// Example 2
const myName = (name, age) => {console.log(`Hello ${name}`);
                                console.log(`You are ${age} old`)};
myName("waseef", 19);

// Example 3
setTimeout( () => console.log("Hello"), 3000);

// Example 4
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
// for a single line return is not required
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
