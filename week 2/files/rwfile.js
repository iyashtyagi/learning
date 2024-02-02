const fs = require("fs");

fs.readFile("hello.txt", "utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        data = data + "-by King"
        fs.writeFile("hello.txt", data,(error)=>{
            if(error){
                console.log(error);
            }
        })
    }
})