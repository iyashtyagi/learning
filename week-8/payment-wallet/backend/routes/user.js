const express = require("express");
const router = express.Router();
const {signupSchema, signinSchema} = require("../utils/zodUtil");
const {jwtGen} = require("../utils/jwtUtil");
const { User } = require("../db");


router.post("/signup",async (req,res)=>{
    const {success} = signupSchema.safeParse(req.body);
    
    if(!success){
        return res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }   

    const {email, password, firstName, lastName} = req.body;
    const isUserExist =await User.findOne({email});

    if(isUserExist){
        return res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }       

    const newUser = await User.create({email, firstName, lastName, password});
    const token = jwtGen({userId:newUser._id});

    res.status(200).json({message: "User created successfully",token})
})


router.post("/signin",async (req,res)=>{
    const {email, password} = req.body;
    const {success} = signinSchema.safeParse({email, password});
    if(!success){
        return res.status(411).json({"message" : "Error while logging in"});
    }

    const user = await User.findOne({email, password});
    
    if(!user){
        return res.status(411).json({"message" : "Error while logging in"});
    }

    const token = jwtGen({userId : user._id});
    res.status(200).json({token});
})

module.exports = router;