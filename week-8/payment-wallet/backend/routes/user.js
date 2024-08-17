const express = require("express");
const router = express.Router();
const {signupSchema, signinSchema, updateUserSchema, userSearchSchema} = require("../utils/zodUtil");
const {jwtGen} = require("../utils/jwtUtil");
const { User } = require("../db");
const { authMiddleware } = require("../middleware");


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

    return res.status(200).json({message: "User created successfully",token})
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
    return res.status(200).json({token});
})

router.put("/",authMiddleware ,async (req,res)=>{
    const {success, data} = updateUserSchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({"message" : "Error while updating information"});
    }

    const {userId} = req.headers;

    try {
        await User.findByIdAndUpdate(userId,data);
    }
    catch{
        return res.status(411).json({"message" : "Error while updating information"});
    }

    return res.status(200).json({"message" : "Updated successfully"});
})

router.get("/bulk",authMiddleware, async(req,res)=>{

    const {filter} = req.query;
    const {success} = userSearchSchema.safeParse(filter);
    if(!success){
        return res.status(200).json({users: []});
    }
    
    const users = await User.find({
        $or: [
            { firstName : {$regex : filter, $options :"i"}},
            { lastName : {$regex : filter, $options :"i"}}
        ]
    }, "_id firstName lastName");

    return res.status(200).json({users});
})

module.exports = router;