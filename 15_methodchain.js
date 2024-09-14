/*
    Method Chaining is calling one method after another
    in one contionuous line of code.
*/
let username = "Bro Code"
// --------> No Method Cahin <----------
username = username.trim();
username = username.toUpperCase();
console.log(username);

// --------> Method Chaining <----------
username = username.trim().toUpperCase().slice(1) + username.trim().slice(5).toLowerCase();
console.log(username);