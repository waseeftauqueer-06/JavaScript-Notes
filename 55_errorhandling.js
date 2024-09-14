/* Error => An object that is created to represent a problem that occurs
            Occur often with user input or establishing a connection

            Network errors
            promise rejection
            security errors

            using error handling makes the program to not get interrupted
            and executes till the end of the program

            try {} => Encloses code that might potentially cause an error
            catch {} => catch and handle any thrown errors from try{}
            finally {} => Optional, Always executes. Used mostly for cleanup
                          ex. close files, close connections, release resources
            throw {} => we can throw an error if needed
*/
//example 1
try{
    console.log(x);
}catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}
console.log("You have reached the end!");

//example 2

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Enter a valid number");
    }


    const result = dividend/divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
