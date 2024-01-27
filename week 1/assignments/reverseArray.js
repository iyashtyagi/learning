let numArray = [1,2,3,4,5,6,7,8];
let numArrayLength = numArray.length;
let reversedArray = [];

for(let i = numArrayLength-1; i>=0;i--){
    reversedArray.push(numArray[i]);
}
console.log(reversedArray)