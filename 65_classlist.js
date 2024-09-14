/* classList => Element property in JS used to interact
                with an element's list of classes (CSS classes)
                Allows you to make reusable classes for many elements

                add()
                remove()
                toggle(Remove if present, Add if not)
                replace(oldClass, newClass)
                contains()
*/
// Example element
const element = document.getElementById('example');

// add() example: Add 'highlight' class to the element
function addClass() {
    element.classList.add('highlight');
}

// remove() example: Remove 'bold' class from the element
function removeClass() {
    element.classList.remove('bold');
}

// toggle() example: Toggle the 'italic' class (add if not present, remove if present)
function toggleClass() {
    element.classList.toggle('italic');
}

// replace() example: Replace 'bold' class with 'italic'
function replaceClass() {
    element.classList.replace('bold', 'italic');
}

// contains() example: Check if 'bold' class is present in the element
function checkClass() {
    const hasBoldClass = element.classList.contains('bold');
    alert(`Contains 'bold' class? ${hasBoldClass}`);
}
