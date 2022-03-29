/**
 * Write a JavaScript function to filter false, null, 0 and blank values from an array.
 */

let myArr = [58, '', 'CFD', true, null, false, 0]

function removeFalsy(arr) {
    const newArr = arr.filter((item) => item);
    return newArr
}

console.log('removeFalsy :>> ', removeFalsy(myArr));