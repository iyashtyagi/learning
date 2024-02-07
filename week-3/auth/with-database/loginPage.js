const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const jwtSecret = "yash@king";
const port = 3000;
const app = express();
app.use(express.json());

// db connection
mongoose.connect("mongodb+srv://king:q1j5HiW3MTpEilDT@cluster0.cgf6byh.mongodb.net/test_app");

// designing schema
const User = mongoose.model('user',{name: String, username: String, password: String});

app.post("/signup", async (req,res)=>{
    const {name, username, password} = req.body;

    // checking if the user already exist
    const isExist = await User.findOne({username : username});
    if (isExist) {
        return res.status(400).json({"msg": "User already exist"});
    }

    // creating newUser
    const newUser = new User({
        name : name,
        username : username,
        password : password
    })
    // saving the user
    try {
        await newUser.save();
        res.status(200).json({"msg" : "Account created successfully"})
    } catch (error) {
        return res.status(500).json({"msg": error});
    }
    
    
    
})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})