const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const port = 3000;
const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username : "yash@gmail.com",
        password : "1234",
        name : "Yash Tyagi"
    },
    {
        username : "rohit@gmail.com",
        password : "rohit@1234",
        name : "Rohit"
    },
    {
        username : "mohit@gmail.com",
        password : "mohit@1234",
        name : "Mohit Kumar"
    },
    {
        username : "kanika@gmail.com",
        password : "kanika@1234",
        name : "Kanika Raheja"
    },
    {
        username : "yashika@gmail.com",
        password : "yashika@1234",
        name : "Yashika Saluja"
    }
]


function userExist(username, password){
    // return ALL_USERS.filter((user)=>{
    //     if(user.username == username && user.password == password){
    //         console.log(`user.username: ${user.username} && user.password: ${user.password}`);
    //         return true;
    //     }
    // }) .filter() always return an array

    return ALL_USERS.some((user)=>((user.username).toLowerCase() == username.toLowerCase() && user.password == password))
}



app.post("/login",(req,res)=>{
    const {username, password} = req.body;
    if(!(userExist(username, password))){
        return res.status(403).json({"msg":"user doesn't exist"});
    }

    let token = jwt.sign({"username":username}, "king");
    console.log(`line 56 token = ${token}`)
    return res.json({
        "token":token
    });
})

app.get("/users",(req,res)=>{
    const token =  req.headers.authorization;
    console.log(`Line 74 token : ${token}`)
    try{
        const decode = jwt.verify(token,"king");
        const username = decode.username;
        const updatedArray = ALL_USERS.filter((user)=>{
            if(!(user.username.toLowerCase() == username.toLowerCase())){
                return true;
            }
        })
        res.status(200).json({"userArray":updatedArray});
        
    }
    catch(err){
        return res.status(403).json({"msg":"invalid token"});
    }

})



app.listen(port, () => {
    console.log(`Server started: ${port}`);
})