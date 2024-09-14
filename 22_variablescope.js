//variable scope => where a vaiable is recognized and accessible (local vs global)

// No naming conflicts as both x are in diff scopes
function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 2;
    console.log(x);
}
function1();
function2();

// functions 1 has no idea about function 2 (local scope)
function function1(){
    let x = 1;
    console.log(y);
}
function function2(){
    let y = 2;
    console.log(x);
}
function1();
function2();

// Global scope
let z = 10;

function function3(){
    let z = 15; //local scope has more preference
    console.log(z);
}
function3(); // output => 15