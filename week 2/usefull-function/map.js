// Normal way of doing it
// [2,4,6,8,10]
const numArray = [1,2,3,4,5];

const newArray = []

for(let i= 0;i<numArray.length;i++){
    newArray.push(numArray[i]*2);
}

console.log(newArray);

// another way of doing it
const anotherArray = [];

numArray.forEach((elements)=>{
    anotherArray.push(elements*2)
})

console.log(anotherArray);

// now professional way of doing this

const third = numArray.map((i)=>{
    return i*2;
})



// custom map func

const customMap = (arr,fn)=>{
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i]))
    }
    return mappedArray;
}

function func(data){
    return data*2;
}

console.log(customMap(numArray,func));