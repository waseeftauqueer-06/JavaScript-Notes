/* .map() => accepts a callback and applies that function
            to each of an array, then return a new array.

            Useful in perserving the original array.
*/

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}


const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsupper = students.map(upperCase);
const studentslower = students.map(lowerCase);

console.log(studentslower);
console.log(studentsupper);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}