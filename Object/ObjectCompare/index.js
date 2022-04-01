/**
 * Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
    * Use Object.keys() to get all the keys of the second object.
    * Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.
 */

/**
 * Viết một Javascript function giúp so sánh 2 object để xác định obj1 có chứa tất cả key của obj2 hay không?
    * Sử dụng Object.keys() để lấy tất cả những keys của obj2
    * Sử dụng Array.prototype.every(), Object.prototype.hasOwnProperty() và so sánh sâu (===) để xác định tất cả keys của obj1 có cùng giá trị với obj2 
 */

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
