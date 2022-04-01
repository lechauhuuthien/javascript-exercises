/**
 * Delete a property (key) of an object 
 */


/**
 * Xóa một key của object
 */

let obj = {
    name: "CFD",
    code: "CS2",
    address: "Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM",
};

console.log(obj.code);
// expected output: "CS2"
// Kết quả mong muốn: "CS2"

delete obj.code;

console.log(obj.code);
// expected output: undefined
// Kết quả mong muốn: undefined