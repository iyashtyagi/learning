const express = require('express');
const cors = require('cors')
const port = 3000;
const app = express();

app.use(cors());

app.get("/sum",(req,res)=>{
    const {num1,num2} = req.query;
    const sum = parseInt(num1) + parseInt(num2);    
    res.status(200).send(sum.toString());
})

app.get("/interest", (req,res)=>{
    const {principal, rate, time} = req.query;
    const interest = (parseInt(principal) * (parseInt(rate)/100) * parseInt(time));
    const total = parseInt(principal) + interest
    res.status(200).json({total,interest});
})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})