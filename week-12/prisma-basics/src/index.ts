import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function insertUser(username:string, email:string, firstName:string, lastName:string, password:string){
    const a = await prisma.user.create({
        data: {
            username,
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(a);
}

insertUser("yash", "yash@gmail.com", "Yash", "Tyagi", "1234");