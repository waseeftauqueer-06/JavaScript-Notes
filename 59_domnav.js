/* DOM Navigation => The process of navigating through the structure
                     of an HTML document using JS.


                     .firstElementChild
                     .lastElementChild
                     .nextElementSibling
                     .previouElementSibling
                     .parentElement
                     .children
*/

// Access the unordered list
const list = document.getElementById('myList');

// 1. .firstElementChild
const firstItem = list.firstElementChild;
firstItem.style.backgroundColor = 'lightcoral'; // Change background color of the first item

// 2. .lastElementChild
const lastItem = list.lastElementChild;
lastItem.style.backgroundColor = 'lightgreen'; // Change background color of the last item

// 3. .nextElementSibling
const secondItem = firstItem.nextElementSibling;
secondItem.style.backgroundColor = 'lightblue'; // Change background color of the item after the first

// 4. .previousElementSibling
const thirdItem = secondItem.nextElementSibling;
const previousItem = thirdItem.previousElementSibling;
previousItem.style.backgroundColor = 'lightgoldenrodyellow'; // Change background color of the item before the third

// 5. .parentElement
const parentElement = list.parentElement;
parentElement.style.backgroundColor = 'lightgray'; // Change background color of the parent element (body)

// 6. .children
const children = list.children;
for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = `hsl(${i * 60}, 70%, 80%)`; // Change background color of all list items
}
