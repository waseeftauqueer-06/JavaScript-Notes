// while loop => repeat some code while some condition is true

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter username");
    password = window.prompt("Enter your password");

    if(username === "myusername" && password === "mypassword")
    {
        loggedIn = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid Credentials");
    }
}