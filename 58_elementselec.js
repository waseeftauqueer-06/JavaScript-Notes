/* element slectors => Methods used to target and manipulate HTML elements
                       They allow you to select one or more multiple HTML elements
                       from the DOM.

   1. document.getElementById() // Element or Null
   2. document.getElementsClassName() // HTML Collection
   3. document.getElementsByTagName() // HTML Collection
   4. document.querySelector() // Element or Null
   5. document.querySelectorAll() // NodeList
*/

// 1. document.getElementById() example
const header = document.getElementById('header');
console.log("getElementById:", header.textContent); // Output: "Hello World!"

// 2. document.getElementsByClassName() example
const paragraphs = document.getElementsByClassName('text');
console.log("getElementsByClassName:", paragraphs[0].textContent); // Output: "Paragraph 1"

// 3. document.getElementsByTagName() example
const listItems = document.getElementsByTagName('li');
console.log("getElementsByTagName:", listItems[2].textContent); // Output: "Item 3"

// 4. document.querySelector() example
const firstBox = document.querySelector('.box');
console.log("querySelector:", firstBox.textContent); // Output: "Box 1"

// 5. document.querySelectorAll() example
const allBoxes = document.querySelectorAll('.box');
console.log("querySelectorAll:", allBoxes[1].textContent); // Output: "Box 2"
