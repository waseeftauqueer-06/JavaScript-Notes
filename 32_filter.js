/* .filter() => creates a new array by filtering
                out elements
*/


// Example 1
let numbers = [1,2,3,4,5,6,7];

//  calling the filter method
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

//  creating the func to be called
function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

//Example 2
let ages = [12, 34, 23, 14, 17, 90];
let adults = ages.filter(isAdult);
let childs = ages.filter(isChild);

console.log(adults);
console.log(childs);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}


