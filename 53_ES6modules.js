/* ES6 => An external file that contains reusable code
          that can be imported into other other JS files.
          Write reusable code for many diff apps.
          Can contain variables, classes, fun, .. and more.
          Introduced as part of ECMAScript 2015 update
*/
import {PI, getCircumference, getArea, getVolume} from './mathutil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(circumference);
console.log(area);
console.log(volume);