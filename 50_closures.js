/* Closure => A function defined inside of another function,
              the inner function has access to the variables
              and scope of the outer function.
              Allow for private variables and state maintainence
              Used Frequently in JS frameworks
*/

//Example 1
function outer(){
    const message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

//Example 2
function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count Increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());

//Example 3
function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(12);
game.decreaseScore(5);
console.log(`The final Score is ${game.getScore()}pts`);
