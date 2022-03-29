/**
 * Check whether an object is empty or not
 */
const obj = {}

let isObjEmpty = obj // 👈 null and undefined check
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype