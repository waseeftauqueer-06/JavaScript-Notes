// array = a variable like structure that can hold more than 1 value

let fruit = ["apple", "orange", "banana", "Melon"];
console.log(fruit);

//array elements can be accessed using arrays
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);

//built in methods
fruit.push("Grapes"); //pushes the element to the last
fruit.pop(); // pops the last element
fruit.unshift("mango"); //adds the element to the beginning
fruit.shift(); // removes the first element

fruit.sort(); //sorts the array
fruit.reverse(); //reverses the array

console.log(fruit.length); //finds the length of array
console.log(fruit.indexOf("banana")); //to check the presence of element

//using a for loop for array
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

for(let fruits of fruit){
    console.log(fruits);
}