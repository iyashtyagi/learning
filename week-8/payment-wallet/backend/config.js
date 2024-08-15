const dotenv = require("dotenv").config();

module.exports = {
    JWT_SECRET : process.env.JWT_SERVER_SECRET
}