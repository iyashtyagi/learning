let sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

console.log(sampleObject);

// Object.keys: print all the keys
console.log(Object.keys(sampleObject));

// Object.values: print all the values
console.log(Object.values(sampleObject));

// Object.entries: print all the keys and values
console.log(Object.entries(sampleObject));

// hasOwnProprty: print the boolean value - true, false if prensent 
console.log(sampleObject.hasOwnProperty("key1"));

// Object.assign: to add keys and value in a object
sampleObject = Object.assign({},sampleObject, {age:65});

console.log(sampleObject);

console.log(sampleObject.hasOwnProperty("age"));