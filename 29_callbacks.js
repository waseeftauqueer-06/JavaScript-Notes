/* callbacks => a function that is passed as an argument
                to another funciton.
                Used to handle asynchronous operations
                Hey when you are done call this next
*/
// example 1
hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("GoodBye!");
}

//example 2
sum(display, 1, 2)
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function display(result){
    console.log(result);
}