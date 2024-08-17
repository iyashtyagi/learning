const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { transactionSchema } = require("../utils/zodUtil");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance",authMiddleware,async(req,res)=>{
    const {userId} = req.headers;
    const {balance} = await Account.findOne({userId});

    res.status(200).json({balance});
})

router.post("/transfer",authMiddleware, async(req,res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const {success} = transactionSchema.safeParse(req.body);
        if(!success){
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({"message": "Invalid inputs"});
        }
    
        const { to, amount } = req.body;
        const { userId } = req.headers;
        const { balance } = await Account.findOne({userId}).session(session);
    
        if(amount>balance){
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({"message" : "Insufficient balance"});
        }
    
        const receiver = await Account.findOne({userId:to}).session(session);
    
        if(!receiver){
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({"message" : "Invalid account"});
        }
    
        await Account.updateOne({userId}, {$inc : {balance : -amount}}).session(session);
        await Account.updateOne({userId : to}, {$inc : {balance : amount}}).session(session);
    
        await session.commitTransaction();
        session.endSession();
        return res.status(200).json({"message" : "Transfer successful"});
    }
    catch{
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({"message" : "Something went wrong"});
    }
})

module.exports = router;