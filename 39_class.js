/* class => (ES6 Feature) provides a more structured and cleaner
            way to work with objects compared to traditional
            constructor functions

            ex. static keyword, encapsulatoin, inheritance
*/


// class creation and constructor methods creation
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.5;

// objects or instances creation
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.99);
const product3 = new Product("Underware", 89.99);

// calling the methods
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total Price including Tax : $${total.toFixed(2)}`);