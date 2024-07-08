const {inputData,inputId} = require("./inputTypes");

function inputDataValidator(req,res,next){
    
    const isValidData = inputData.safeParse(req.body);
    if(!isValidData.success){
        res.status(401).json({msg : "Invalid input" });
        return;
    }

    next();   
}

function inputIdValidator(req,res,next){

    const isValidId = inputId.safeParse(req.body);
    
    if(!isValidId.success){
        res.status(401).json({msg: "Invalid input"});
        return;
    }
    
    next();
}

module.exports = {
    inputDataValidator, 
    inputIdValidator
}