const express = require("express");
const port = 3000;
const app = express();

console.log(app);

app.get('/',(req,res)=>{
    res.send("Hello buddy");
})

app.listen(port,()=>{
    console.log(`Server is up! at http://localhost:${port}`);
})