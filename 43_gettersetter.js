/* getter => special method that makes a property readable
   setter => special method that makes a property writeable

   validate and modify a value when reading/writing a propery
*/
class Rectangle{

/*When the constructor does this.width = width;, 
  it doesn't directly assign the value to this.width. 
  Instead, it triggers the setter method that you defined earlier.
*/
   constructor(width, height){
      this.width = width;
      this.height = height;
   }
// make the properites writeable
   set width(newWidth){
      if(newWidth > 0){
         this._width = newWidth;
      }
      else{
         console.error("Width must be a positive number");
      }

   }
   set height(newHeight){
      if(newHeight > 0){
         this._height = newHeight;
      }
      else{
         console.error("Height must be a positive number");
      }

   }

// make properties readable
   get width(){
      return this._width.toFixed(1);
   }
   get height(){
      return this._height.toFixed(1);
   }

//this is not a property of an object, but with getters we can add more logics if required eventhough it is not stored as value in the object
   get area(){
      return (this._height * this._width).toFixed(1);
   }
}

const rectangle = new Rectangle(3, 4); // the properties are now writeable but not readable, so create getters
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);



//Example 2
class Person{
   constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   set firstName(newFirstName){
      if(typeof newFirstName === "string" && newFirstName.length > 0){
         this._firstName = newFirstName;
      }
      else{
         console.error("Enter a valid Name");
      }
   }
   set lastName(newLastName){
      if(typeof newLastName === "string" && newLastName.length > 0){
         this._lastName = newLastName;
      }
      else{
         console.error("Enter a valid secong Name");
      }
   }
   set age(newAge){
      if(newAge > 0){
         this._age = newAge;
      }
      else{
         console.error("Enter a valid age");
      }
   }

   get firstName(){
      return this._firstName;
   }
   get lastName(){
      return this._lastName;
   }
   get fullName(){
      return this._firstName + " " + this._lastName;
   }
   get age(){
      return this._age;
   }
}

const person1 = new Person("Walter", "White", 52);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);