/**
 * Write a JavaScript program to replace the names of multiple object keys with the values provided.

    Use Object.keys() in combination with Array.prototype.reduce() and the spread operator (...) to get the object's keys and rename them according to keysMap.
 */

/**
 * Viết mộ javascript function giúp thay đổi key name của một object 

    Sử dụng Object.keys() cùng với Array.prototype.reduce() và the spread operator (...) để lấy key của object và đổi tên theo một keyMap được truyền vào
    
    exp: 
    const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
    rename_keys({ name: 'firstName', job: 'actor' }, obj) 
    
    => obj = {firstName: "Bobo", job: 'Programmer', shoeSize: 100};
 
    */

const rename_keys = (keysMap, obj) =>
    Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
        }),
        {}
    );

const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);

console.log("-------------------------------------");

result = rename_keys({ name: 'firstName', job: 'actor' }, obj);
console.log("New Object");
console.log(result);
