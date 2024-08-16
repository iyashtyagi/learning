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

const updateUserSchema = zod.object({
    password : zod.string().min(6).optional(),
    firstName : zod.string().min(1).max(30).optional(),
    lastName : zod.string().min(1).max(30).optional()
}).refine((data)=> data.password || data.firstName || data.lastName,{
    message : "At least one field must be present",
})

module.exports = {
    signinSchema,
    signupSchema,
    updateUserSchema
}
