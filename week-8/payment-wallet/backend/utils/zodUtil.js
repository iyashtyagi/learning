const zod = require("zod");

const signupSchema = zod.object({
    email : zod.string(),
    firstName : zod.string().min(1).max(30),
    lastName : zod.string().min(1).max(30),
    password : zod.string().min(6)
})

const signinSchema = zod.object({
    email : zod.string(),
    password : zod.string().min(6)
})

module.exports = {
    signinSchema,
    signupSchema
}
