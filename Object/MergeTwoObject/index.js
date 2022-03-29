/**
 * Merge two objects below without duplicate value
 * let obj1 = { id: 001, name: 'CFD' }
 * let obj2 = { name: 'CFD', code: 'CS2', address: 'Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM' }
 */

let obj1 = { id: 001, name: "CFD" };
let obj2 = {
    name: "CFD",
    code: "CS2",
    address: "Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM",
};

//  Solution 1
let merged = { ...obj1, ...obj2 };

console.log("merged :>> ", merged);

//  Solution 2
let merged2 = Object.assign(obj1, obj2);

console.log("merged2 :>> ", merged2);

//  Solution 3
function mergeObjects(obj1, obj2) {
    let obj3 = {};
    for (let attrName in obj1) {
        obj3[attrName] = obj1[attrName];
    }
    for (let attrName in obj2) {
        obj3[attrName] = obj2[attrName];
    }
    return obj3;
}
console.log("merged3 :>> ", mergeObjects(obj1, obj2));
