const dotenv = require("dotenv").config();

module.exports = {
    JWT_SECRET : process.env.JWT_SERVER_SECRET,
    DB_CONNECTION_STRING : process.env.DB_CONNECTION_STRING
}