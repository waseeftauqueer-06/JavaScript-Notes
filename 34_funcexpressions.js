/* function declaration => define a reusable block of code
                            that performs a specific task

    function expression => a way to define function as
                            values or variables
*/

// function as variables
const hello = function(){
    console.log("Hello");
}
hello();

//function as values

//In JS it is valid to pass an entire func as an parameter
//Also known as anonymous function
setTimeout(function(){
    console.log("Hello");
}, 3000);


// Example 2
const numbers = [1, 2, 3, 4, 5, 6, 7];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(squares);
console.log(cubes);

//Example 3
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(evenNums);
console.log(oddNums);

