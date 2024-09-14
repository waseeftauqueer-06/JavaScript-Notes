/* forEach() => method used to iterate elements
                of an array and apply a specified
                function (callback) to each element

                array.forEach(callback)
                element, index, array are provided
*/
let numbers = [1,2,3,4,5];

// calling the forEach loop with the function to be performed
numbers.forEach(square);
numbers.forEach(display);

// function to be performed on each element
function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}


let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}