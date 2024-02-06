const express = require("express");

const port = 3000;
const app = express();

let totalRequest = 0;

function requestCounter(req,res,next){
    req.startTime = new Date().getTime();
    totalRequest++
    next();
}

function totalTimeCalculator(req,res){
    const startTime = req.startTime;
    const endTime = req.endTime;
    console.log(`Total time taken to process number ${totalRequest} request: ${endTime-startTime}ms`);
}

app.get("/",requestCounter,(req,res,next)=>{
    res.status(200).json({"msg":"here we go again"})
    req.endTime = new Date().getTime();
    next();
},totalTimeCalculator)

app.listen(port,()=>{
    console.log(`Server started: http://localhost:${port}`);
})