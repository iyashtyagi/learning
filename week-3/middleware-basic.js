const express = require("express");

const port = 3000;
const app = express();

// middlewares
function userValidation(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(!(username == "yash" && password =="yash@king")){
        res.status(400).json({"msg":"Something wrong with your credientials"});
    }else{
        next();
    }
}

function kidneyValidation(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(!(kidneyId==1 || kidneyId == 2)){
        res.status(400).json({"msg":"Something wrong with your query"});
    }
    else{
        next();
    }
}

app.get("/",userValidation,kidneyValidation,(req,res)=>{
    // Ugly way
    // const kidneyId = req.query.kidneyId;
    // const username = req.headers.username;
    // const password = req.headers.password;

    // if(username !="yash" || password!="yash@king"){
    //     res.status(400).json({"msg":"Something wrong with your credientials"});
    //     return;
    // }
    // if(kidneyId!=1 && kidneyId!=2){
    //     res.status(400).json({"msg":"Something wrong with your query"});
    //     return;
    // }
    res.json({
        "msg":"Your kidney is fine!"
    })
})


app.listen(port,(()=>{
    console.log(`Server started: http://localhost:${port}`);
}))