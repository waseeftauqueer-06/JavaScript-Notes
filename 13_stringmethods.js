//String methods => allows you to manipulate and work with text

let username = "Waseef Tauqueer";

console.log(username.charAt(8)); //char at the index

console.log(username.indexOf('u')); //returns char index
console.log(username.lastIndexOf('e')); //return last occurence

console.log(username.length); //returns lenght of string
console.log(username.trim()); //removes whitespace

console.log(username.toLocaleLowerCase()); //lowercases the string
console.log(username.toUpperCase()); //uppercases the string

username = username.repeat(4);

let result1 = username.startsWith(" ") //return true or false
let result2 = username.endsWith(" ") //return true or false

console.log(result1);
console.log(result2);
console.log(username);

let result3 = username.includes(" "); //is there or not checking
if(result3)
{
    console.log("cant include white space");
}
else{
    console.log(username);
}

let phoneNum = "123-456-789"
phoneNum = phoneNum.replaceAll("-", "/") //replaces with the specified text
console.log(phoneNum);

phoneNum = phoneNum.padStart(15, "0");
console.log(phoneNum);

phoneNum = phoneNum.padEnd(15, "0");
console.log(phoneNum);