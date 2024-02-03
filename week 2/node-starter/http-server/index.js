const express = require("express");
const port = 3000;
const app = express();

const user = [{
    name : "Yash",
    kidney: [{
        healty: true
    },{
        healty: false
    }]
}]

app.get('/',(req,res)=>{
    res.json(user);
})

// Square function
function square(num){
    return num*num;
}

app.get('/square',(req,res)=>{
    const num = req.query.n;
    const result = square(num)
    if(result){
        res.send(`The square of ${num} is ${result}`);
    }
    else{
        res.send(`Idiot, do you think ${num} is a number? huh?`);
    }
})

// factorial function
function factorial(num){
    if (num == 1) {
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}

app.get('/factorial',(req, res)=>{
    const num = req.query.n;
    const result = factorial(num)
    if(result){
        res.send(`The factorial of ${num} is ${result}`);
    }
    else{
        res.send(`Idiot, do you think ${num} is a number? huh?`);
    }
})

app.get('/king',(req,res)=>{
    res.json({
        "name" : "Yash",
        "role" : "king",
        // "req.header" : req.headers,
    })
})

app.listen(port,()=>{
    console.log(`Server is up! at http://localhost:${port}`);
})