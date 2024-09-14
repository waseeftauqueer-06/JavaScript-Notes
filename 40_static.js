/* static => keyword that defines properties or methods
             that belong to a class rather than the objects
             created from the class

             Class owns anything static, not the objects
*/

//Example 1
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

// No object creation is required
console.log(MathUtil.PI);
console.log(MathUtil.getArea(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getDiameter(10));

//Example 2
class User{
    static userCount = 0;

    constructor(username){
        this.usernmame = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my name is ${this.usernmame}`);
    }
}

// in this example a new object is created and its name is printed
// at the same time the userCount cannot be accessed through the object
// userCount is Static and it completely belongs to the class
const user1 = new User("Walter White");
const user2 = new User("Jesse Pinkman");
const user3 = new User("Gustavo Fring");

console.log(user1.usernmame);
// X console.log(user1.userCount); X
console.log(User.userCount);

user1.sayHello();
User.getUserCount();