/* setTimeout() => function in JavaScript that allows you to schedule
                   the execution of a function after an amount of time
                   Times are approximate (varies based on the workload of JS runtime env.)

                   setTimeout(callback, delay)
*/

function sayHello(){
    console.log("Hello");
}
setTimeout(sayHello, 3000);

setTimeout(function(){console.log("Hello")}, 3000);

setTimeout(() => console.log("Hello"), 3000);

// clearTimeout(timeoutId) => can cancel a timeout before it triggers

const timeoutID = setTimeout(() => console.log("Hello"), 3000);
clearTimeout(timeoutID);