let students = 100;

students1 = students + 100 //addition
students2 = students - 100 //subtraction
students3 = students * 100 //multiplication
students4 = students / 2 //division
students5 = students ** 3 //exponential
students6 = students % 3 //modulo


console.log(students1)
console.log(students2)
console.log(students3)
console.log(students4)
console.log(students5)
console.log(students6)

//we can also operate like
students += 2
students -= 2
students *= 2
students /= 2
students **= 2
students %= 2

//Increment and Decrement
students++;
students--;

//Operator precedence
/*
    1. paranthesis()
    2. exponents
    3. multi & div & mod
    4. add & sub
*/
let result = 12 % 5 + 8 / 2 + 2 * 2 - 2 ** 3;
console.log(result)

