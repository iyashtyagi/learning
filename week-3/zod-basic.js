const zod = require("zod");

function inputValidator(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8).max(25)
    })
    return schema.safeParse(obj);
}

const user = {
    email : "@d.co",
    password : "123d3432"
}

const isValidated = inputValidator(user);

console.log(JSON.stringify(isValidated))