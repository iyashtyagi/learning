const { jwtVerify } = require("./utils/jwtUtil");

function authMiddleware(req,res,next){
    const {authorization} = req.headers;

    if(!authorization || !authorization.startsWith("Bearer")){
        return res.status(403).json({});
    }

    const isValidToken = jwtVerify(authorization.split(" ")[1]);
    if(!isValidToken){
        return res.status(403).json({});
    }
    
    req.headers.userId = isValidToken.userId;

    next();
}

module.exports = {
    authMiddleware
}