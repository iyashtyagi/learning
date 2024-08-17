const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const router = express.Router();

router.get("/balance",authMiddleware,async(req,res)=>{
    const {userId} = req.headers;
    const {balance} = await Account.findOne({userId});

    res.status(200).json({balance});
})

module.exports = router;