/* constructor => special method for defining the 
                  properties and methods of objects

                  It helps with code reusability
*/

function car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)};
}

// new objects or instances
const car1 = new car("Honda", "Civic", 2019, "Black");
const car2 = new car("Aston Martin", "DB12", 2024, "Green");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.drive();