/**
 * Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

    Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
 */

/**
 * Viết một hàm javascript để lọc ra những giá trị 

    Sử dụng Array.prototype.filter() và Array.prototype.includes() để lọc ra những item cần thiết
 */

const pull = (arr, ...args) => {
    let pulled = arr.filter((arrItem) => args.includes(arrItem));
    return pulled;
};

let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c")); //["a","c","a","c"]

let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b")); //["b","b"]
