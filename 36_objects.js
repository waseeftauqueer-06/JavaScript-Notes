/* object => A collection of related properties and/or methods
            Can represent real world objects (pepole, products etc.)
            object = {Key : value, 
                      function()}
            Note : Methods are functions that belong to an oject
*/

const person = {
    firstName : "Walter",
    lastName : "White",
    age : 51,
    isEmployed : true,
    sayHello : function(){console.log("I am the Danger")},
    eat : () => console.log("Say my Name")
}   

const person2 = {
    firstName : "Jesse",
    lastName : "Pinkman",
    age : 26,
    isEmployed : true,
    sayHello : function(){console.log("Yeah, Bitch!")},
    eat : () => console.log("Woah, Science!")
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.sayHello();
person2.sayHello();

person.eat();
person2.eat();