const express = require('express');
const zod = require('zod');
const port = 3000;
const app = express();

function loginValidator(obj){
    const userSchema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8).max(25)
    })
    return userSchema.safeParse(obj);
}

app.get('/login',(req,res)=>{
    const loginChecker = loginValidator(req.body);
    if(!loginChecker.success){
        res.status(403).json({loginChecker});
        return;
    }
    
    res.json({"msg":"login successfully"})
})

app.listen(port, () => {
    console.log(`Server started: port`);
})