/* JSON => (JavaScript Object Notation) data-interchange format
           Used for exchanging data between a server and a web application
           JSON files {key : value} OR [{}, {}, {}]

           JSON.stringify() = converts a JS object to a JSON string
           JSON.parse() = converts a JSON string to a JS Object
*/

const names = ["Wlater White", "Jesse Pinkman", "Saul Goodman"];
const person = {
    "name" : "Wlater",
    "age" : 52,
    "isEmployed" : false,
    "hobbies" : ["Cooking", "Shooting"]
};

const jsonString = JSON.stringify(names);
const jsonString1 = JSON.stringify(person);

console.log(jsonString);
console.log(jsonString1);

const jsonNames = `["Wlater White", "Jesse Pinkman", "Saul Goodman"]`;

const parseData = JSON.parse(jsonNames);
console.log(parseData);

fetch("person.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(value => console.log(value))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
