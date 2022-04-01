/**
 * Check whether an object is empty or not
 */

/**
 * Kiểm tra object hiện tại có phải là object rỗng ({}) hay không?
 */

const obj = {}

let isObjEmpty = obj // 👈 null and undefined check
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype