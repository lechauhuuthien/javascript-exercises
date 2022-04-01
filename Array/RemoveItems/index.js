/**
 * Write a JavaScript program to remove specified elements from the LEFT of a given array of elements.
 * Write a JavaScript program to remove specified elements from the RIGHT of a given array of elements.
 * Write a JavaScript program to remove specified elements from the GIVEN INDEX(s) of a given array of elements.
 */

/**
 * Viết một javascript function giúp loại bỏ n phần từ của một array từ Trái
 * Viết một javascript function giúp loại bỏ n phần từ của một array từ Phải
 * Viết một javascript function giúp loại bỏ n phần từ của một array từ vị trí chỉ mục (index) yêu cầu
 */

function remove_from_right(arr, n = 1) {
    return arr.slice(n);
}

console.log(remove_from_right([1, 2, 3]));
console.log(remove_from_right([1, 2, 3], -1));
console.log(remove_from_right([1, 2, 3], -2));
console.log(remove_from_right([1, 2, 3], -4));


function remove_from_right(arr, n = -1) {
    return arr.slice(n);
}

console.log(remove_from_right([1, 2, 3]));
console.log(remove_from_right([1, 2, 3], -1));
console.log(remove_from_right([1, 2, 3], -2));
console.log(remove_from_right([1, 2, 3], -4));


function remove_in_range(arr, fromIndex = 0, removeQuantity = 1) {
    return arr.splice(fromIndex, removeQuantity);
}
let givenArray = [1, 2, 3, 4, 5];
console.log("Original array :>> ", givenArray);
console.log("removed item :>> ", remove_in_range(givenArray));
console.log("original after removed :>> ", givenArray);
console.log("/-------------------------------------/")
let givenArray1 = [1, 2, 3, 4, 5];
console.log("Original array :>> ", givenArray1);
console.log("removed item :>> ", remove_in_range(givenArray1, 1, 3));
console.log("original after removed :>> ", givenArray1);
console.log("/-------------------------------------/")
let givenArray2 = [1, 2, 3, 4, 5];
console.log("Original array :>> ", givenArray2);
console.log("removed item :>> ", remove_in_range(givenArray2, 2, 2));
console.log("original after removed :>> ", givenArray2);