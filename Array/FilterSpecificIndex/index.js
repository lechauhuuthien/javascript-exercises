/**
 * Write a JavaScript program to extract out the values at the specified indexes from a specified array.

    Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are needed.
 */

const filterItemFromIndex = (arr, indexArr) => {
    const result = arr.filter((value, index) => indexArr.includes(index));
    return result;
};

let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(filterItemFromIndex(arra1, [1, 3]));

let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(filterItemFromIndex(arra2, [4]));
