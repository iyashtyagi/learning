const zod = require("zod");

const userSchema = zod.object({
    email : zod.string(),
    firstName : zod.string().min(1).max(30),
    lastName : zod.string().min(1).max(30),
    password : zod.string().min(6)
})

module.exports = {
    userSchema
}
