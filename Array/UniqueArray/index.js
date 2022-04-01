/**
 * Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
 */

/**
 * Viết một javascript function giúp loại bỏ những phần tử trùng nhau trong một mảng
 */

// Solution 1
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

// Solution 2
let chars2 = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars2 = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

// Solution 3
let chars3 = [{ a: "A" }, "B", { a: "A" }, "C", "B"];

function uniq(a) {
    let primaries = { boolean: {}, number: {}, string: {} },
        objects = [];

    return a.filter(function (item) {
        let type = typeof item;
        let itemStr = JSON.stringify(item);
        if (type in primaries)
            return primaries[type].hasOwnProperty(item)
                ? false
                : (primaries[type][item] = true);
        else
            return objects.includes(itemStr) >= 0
                ? false
                : objects.push(itemStr);
    })
}
uniq(chars3)