/* Date objects => Objects that contain values that represent dates
                   and times. These data objects can be changed and
                   formatted.
*/

// Create a Date object representing January 1, 2024, 02:03:04.005
const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// Create a Date object using milliseconds since January 1, 1970
const date1 = new Date(170000000000);  // This is March 4, 1975

// Extract different parts of the date
const year = date.getFullYear();       // 2024
const month = date.getMonth();         // 0 (January, months are 0-indexed)
const day = date.getDate();            // 1 (Day of the month)
const hour = date.getHours();          // 2 (2 AM)
const minutes = date.getMinutes();     // 3
const seconds = date.getSeconds();     // 4
const milliseconds = date.getMilliseconds(); // 5
const dayOfWeek = date.getDay();       // 1 (Monday, 0 is Sunday)

// Log the extracted values
console.log("Year:", year);               // Output: 2024
console.log("Month:", month);             // Output: 0 (January)
console.log("Day:", day);                 // Output: 1
console.log("Hour:", hour);               // Output: 2
console.log("Minutes:", minutes);         // Output: 3
console.log("Seconds:", seconds);         // Output: 4
console.log("Milliseconds:", milliseconds); // Output: 5
console.log("Day of the week:", dayOfWeek); // Output: 1 (Monday)

// Log the complete Date objects
console.log("Date object:", date);         // Mon Jan 01 2024 02:03:04 GMT+0005
console.log("Date object from milliseconds:", date1); // Tue Mar 04 1975 02:46:40 GMT+...


// setting the date objects

const date3 = new Date();

date3.setFullYear(2024);
date3.setMonth(0);
date3.setDate(1);
date3.setHours(2);
date3.setMinutes(3);
date3.setSeconds(4);

console.log(date3);

const dateI = new Date("2023-12-31");
const dateII = new Date("2023-12-30");

if(dateI > dateII){
    console.log("Happy New Year");
}