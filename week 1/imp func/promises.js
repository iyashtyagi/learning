// const { log } = require("console");
// const fs = require("fs");

// // Ugly way of wrinting

// function kingReader(fn){
//     console.log("line 8");
//     fs.readFile("loops.js","utf-8",(error,data)=>{
//         console.log("line 10");
//         fn(data);
//     })
// }

// callback function to call
function logger(data){
    console.log(data);
}

// kingReader(logger);

// // Good way of writing Promises 

// function yashReader(){
//     console.log("yashReader started");
//     return new Promise((resolve)=>{
//         console.log("Line 26")
//         fs.readFile("loops.js","utf-8",(error,data)=>{
//             console.log("Line 28");
//             resolve(data);
//             console.log("Line 29");
//         })
//     })
// }
// console.log(yashReader().then(logger))



// Without function

// let a = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("mem");
//     },1000)
    
// })
// console.log(a)
// a.then(()=>{
//     console.log(a)
// })

// With function
function yashKing(num1, num2){
    let a = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([num1, num2]);
        },1000)  
    })
    return a;
}

let c = yashKing(3,2);
console.log(c);
c.then((data)=>{   //c.then(logger); both of these are same
    console.log(data);
})