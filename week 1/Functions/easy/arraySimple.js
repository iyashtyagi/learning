let inititalArray = [1,2,3];
let secondArray = [4,5,6];
console.log(`Initial array: [${inititalArray}]`);

// push: to add an element in the end 
inititalArray.push(4);
console.log(`push(4): [${inititalArray}]`);

// pop: to remove an element from the end 
inititalArray.pop();
console.log(`pop(): [${inititalArray}]`);

// shift: to remove an element from the start 
inititalArray.shift();
console.log(`shift(): [${inititalArray}]`);

// unshift: to add an element in the start 
inititalArray.unshift(1);
console.log(`unshift(1): [${inititalArray}]`);

// concat: to mergind 2 arrays
console.log(`concat: [${inititalArray.concat(secondArray)}]`);
