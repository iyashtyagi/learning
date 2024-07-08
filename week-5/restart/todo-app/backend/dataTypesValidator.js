const {inputData,inputId} = require("./inputTypes");

function inputDataValidator(req,res,next){
    
    const {title, description} = req.body;
    const isValidData = inputData.safeParse({title,description});
    if(!isValidData.success){
        res.status(401).json({msg : "Invalid input" });
        return;
    }

    next();   
}

function inputIdValidator(req,res,next){

    const {id} = req.body;
    const isValidId = inputId.safeParse({id});
    
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