const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function jwtGen(data){
    return jwt.sign(data,JWT_SECRET);
}

function jwtDecode(token){
    return jwt.decode(token);
}

function jwtVerify(token){
    try{
        const data = jwt.verify(token, JWT_SECRET);
        return data;
    }
    catch{
        return 0;
    }
}

module.exports = {
    jwtGen,
    jwtDecode,
    jwtVerify
}