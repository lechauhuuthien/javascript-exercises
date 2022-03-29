/**
 * Union 2 array below:
 * const arr1 = ["a", "b", "c"];
 * const arr2 = ["a", "b", "c", "d"];
 */

const arr1 = ["a", "b", "c"];
const arr2 = ["a", "b", "c", "d"];

// Solution 1
const union = Array.from(new Set([...arr1, ...arr2]));

// 👇️ ['a', 'b', 'c', 'd']
console.log(union);

// Solution 2 (ES6)
function getUnion(array1, array2) {
    const difference = array1.filter(
        element => !array2.includes(element)
    );

    return [...difference, ...array2];
}

console.log(getUnion(arr1, arr2));