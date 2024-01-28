const fs = require("fs");

// Ugly way of wrinting

function kingReader(fn){
    fs.readFile("loops.js","utf-8",(error,data)=>{
        fn(data);
    })
}

function