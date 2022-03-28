/**
 * Write a JavaScript program to converts a specified number to an array of digits.

    Note: Convert the number to a string, using the spread operator (...) to build an array.

    Convert the number to a string, using the spread operator (...) to build an array.
    Use Array.prototype.map() and parseInt() to transform each value to an integer.
 */

const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123)); // [1,2,3]
console.log(digitize(1230)); // [1,2,3,0]

