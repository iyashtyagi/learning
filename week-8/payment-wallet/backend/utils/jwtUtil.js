const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function jwtGen(data){
    return jwt.sign(data,JWT_SECRET);
}

module.exports = {
    jwtGen
}