const fruits = [{name : "apple", color : "red", calories : 95},
    {name : "Orange", color : "orange", calories : 45},
    {name : "banana", color : "yellow", calories : 105},
    {name : "coconut", color : "white", calories : 35},
    {name : "pineapple", color : "yellow", calories : 55}
]

console.log(fruits[2].name);
console.log(fruits[4].name);

fruits.push({name : "grapes", color : "purple", calories : 99});
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

//applying forEach()
fruits.forEach(fruit => console.log(fruit.calories));

//applying map()
const fruitName = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitName);
console.log(fruitCalories);
console.log(fruitColors);

//applying filter()
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalories = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits);
console.log(lowCalories);
