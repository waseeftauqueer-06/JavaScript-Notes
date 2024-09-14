/* nested objects => Objects inside of our Objects.
                     Allows you to represent more complex data structures
                     child Object is enclosed by a Parent Object

                     Person{Address{}, ContactInfo{}}
                     ShoppingCart{keyboard{}, Mouse{}, Monitor{}}
*/
const person = {
    fullName : "Gustavo Fring",
    age : 58,
    isBoss : true,
    hobbies : ["Shooting", "Cooking"],
    address : {
        street : "123 Taco St",
        city : "Some City",
        Country : "Mexico"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.Country);

for(const property in person.address){
    console.log(person.address[property]);
}

//Example 2
class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Walter", 50, "123 conch st", "Some City", "Mexico");
const person2 = new Person("Jesse", 24, "123 sfaz", "some city", "America");

console.log(person1.address);
console.log(person1.address.city);