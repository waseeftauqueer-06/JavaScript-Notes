// function - A section of reusable code

// function declaration
// The order of the parameters and arguments should match up

function happyBirthday(userName, age){
    console.log("Happy Birthday to You")
    console.log("Happy Birthday to You")
    console.log(`Happy Birthday to dear ${userName}`)
    console.log("Happy Birthday to You")
    console.log("Happy Birthday to You")
    console.log(`You are ${age} years old`)
}

// function call and arguments
happyBirthday("Donald Trump", 69);
happyBirthday("Joe Biden", 96);

//Aritmetic ops functions
function add(x, y){
    let result = x + y;
    return result; // or return x + y
}
function sub(x, y){
    let result = x - y;
    return result; // or return x - y
}
function sub(x, y){
    let result = x * y;
    return result; // or return x * y
}
function sub(x, y){
    let result = x / y;
    return result; // or return x / y
}

let answer = add(2, 3);
console.log(answer); // or console.log(add(2,3))

// Odd or even function
function isEven(number){
    if(number % 2 === 0){
        return true; // or return number % 2 === 0 ? true : false
    }
    else{
        return false;
    }
}

console.log(isEven(11));

//email validation function
function isValid(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValid("waseef@gmail.com"));