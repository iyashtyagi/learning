const arr =  [1,2,3,4,5,6,7];

const evenArray = [];

// normal way
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 == 0){
        evenArray.push(arr[i]);
    }
}

console.log(evenArray);
// mentos jindgi with filter



console.log(arr.filter((i)=>{
    if(i%2==0){
        return true;
    }
    else{
        return false;
    }
}));
