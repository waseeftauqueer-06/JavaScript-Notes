/* this => reference to the object where THIS is used
            (The object depends on the immediate context)
            person.name = this.name

            reference to the object we are within
            Note : Doesn't work with arrow functions

            The this keyword is used within methods inside 
            objects to ensure that any changes or references 
            are properly associated with the object that is calling the method.
*/

const person1 = {
    name : "Walter White",
    favFood : "Bacon Strips",
    sayHello : function() { 
        console.log(`Hi I am ${this.name}`);
    },
    eat : function() { 
        console.log(`I like ${this.favFood}`);
    }
}

person1.sayHello();
person1.eat();
