/**
 * Write a JavaScript program to converts a specified number to an array of digits.

    Note: Convert the number to a string, using the spread operator (...) to build an array.

    Convert the number to a string, using the spread operator (...) to build an array.
    Use Array.prototype.map() and parseInt() to transform each value to an integer.
 */

/**
 * Hãy viết một hàm javascript để chuyển đổi một số thành một array chứ các chữ số riêng lẻ

   Lưu ý: chuyển số thành dạng string, sau đó dùng spread operator (...) để tạo array

   Sử dụng Array.prototype.map() và parseInt() để chuyển đổi từng giá trị thành số nguyên.
 */

const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123)); // [1,2,3]
console.log(digitize(1230)); // [1,2,3,0]

