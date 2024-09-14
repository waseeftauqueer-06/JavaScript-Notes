// Number Guessing Game

const minNum = 1;
const maxNum = 50;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let guess;
let attempts = 0;
let running = true;

while(running){

    //get input from user and typecast
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    //check for valid number
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if( guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{

        //increase the attempts
        attempts++;

        //check for the right guess
        if(guess < answer){
            window.alert("Too low, Try again!");
        }
        else if(guess > answer){
            window.alert("Too high, Try again!");
        }
        else{
            window.alert(`Correct! The answer was ${answer} and it took you ${attempts} attempts`);
            //stop once guessed correctly
            running = false;
        }
    }
    
}