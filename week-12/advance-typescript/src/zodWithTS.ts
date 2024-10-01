import { z } from 'zod';
import express, { Request, Response } from 'express';

const app = express();

const UserProfileSchema = z.object({
    name : z.string().min(1, "length is too short"),
    email : z.string().email("Email is not valid"),
    age:z.number().min(18).optional()
})

type UserSchemaType = z.infer<typeof UserProfileSchema>;

app.get("/",(req:Request,res:Response)=>{
    const { success } = UserProfileSchema.safeParse(req.body);
    const user:UserSchemaType = req.body;
    if (!success) {
        res.status(411).json({});
    }
    res.status(200).json({user});
})

app.listen(3000,()=>{
    console.log("Server started");
})