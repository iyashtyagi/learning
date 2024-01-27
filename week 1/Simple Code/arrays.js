// Print all the even number 

let numArray = [1,2,34,5656,2335,243545,786,343,234,67878,997,2212,345645,5665653443456,546,4546];
let largesNumber = numArray[0];
let evenNumArray = [];

for(i=0; i<numArray.length; i++){
    if (numArray[i]%2 === 0) {
        evenNumArray.push(numArray[i]);
        // console.log(numArray[i]);
    }
}
console.log(`Even number array [${evenNumArray}]`);

// Biggest number
for(i=1; i<numArray.length; i++){
    if (largesNumber < numArray[i]) {
        largesNumber = numArray[i];
    }
}
console.log(`largest number = ${largesNumber}`);