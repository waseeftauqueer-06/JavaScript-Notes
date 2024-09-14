/* rest parameters => allows a function work with a variable
                    number of arguments by bundling them into
                    an array/

                    rest = bundles seperate elem into array
*/
function openFridge(...foods){ //rest - bundled the foods
    console.log(foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

//openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);

// sum function
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 4);
console.log(`your total is ${total}`);

//combining strings
function combineString(...strings){
    return strings.join(" ");
}


const fullName = combineString("Mr.", "Spongebob", "Squarepants", "ello");
console.log(fullName);



