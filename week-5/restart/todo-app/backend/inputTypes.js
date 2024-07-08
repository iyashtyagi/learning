const zod = require("zod");

const inputData = zod.object({
    title : zod.string().min(1).max(100),
    description : zod.string().max(5000)
})

const inputId = zod.object({
    id : zod.string()
})

module.exports = {
    inputData, inputId
} 