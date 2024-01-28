let str = "   Yash Tyagi Yash    ";
console.log(`Oringnal string: ${str}`);

// length 
console.log(`Length: ${str.length}`);

// indexOf : return frist matching index
console.log(`Index of: ${str.indexOf("Yash")}`);

// lastIndexOf : return last matching index
console.log(`Index of: ${str.lastIndexOf("Yash")}`);

// slice: return the slice, it take 2 args
console.log(`After slicing: ${str.slice(0,5)}`);

// replace: replce the string, it take 2 args
console.log(`After replacing: ${str.replace("Tyagi","King")}`);

// split: seprate the string, take only separator as argument
console.log(`After spliting: ${str.split("")}`); //if empty then it will split all the characters

// trim: used to trim extra space
console.log(`After triming: ${str.trim()}`) // trimStart, trimEnd

// toUpperCase: convert the string to upper case
console.log(`After toUpperCase: ${str.toUpperCase()}`);

// toLowerCase: convert the string to lower case
console.log(`After toLowerCase: ${str.toLowerCase()}`);