/* sort() => method to sort elements of an array in place.
             Sorts elements as strings in lexicographic order, not alphabetical
             lexicographical - (alphabet + numbers + symbols) as strings
*/

let fruits = ["apple", "orange", "banana", "watermelon"];
fruits.sort();

console.log(fruits);

//gets sorted in lexicographic method
let numbers = [1, 2, 6, 34, 8, 2, 3];
//numbers.sort();

//passing a compare function
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
console.log(numbers);

// working on array of objects
const people = [{name : "Walter White", age : 52, gpa : 4.9},
                {name : "Hank", age : 42, gpa : 3.9},
                {name : "Saul Goodman", age : 38, gpa : 4.1},
                {name : "Mike", age : 58, gpa : 5.0}];

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);                

