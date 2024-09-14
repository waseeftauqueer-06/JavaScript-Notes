//for loop => repeat some code a limited amount of times

for(let i = 0; i<10; i++)
{
    if(i == 5){
        continue; //skips the iteration
    }
    console.log(i);
}

for(let i = 10; i>0; i--)
{
    if(i==6){
        break; //breaks out of the loop entirely
    }
    console.log(i);
}