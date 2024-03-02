const express = require("express");
const cors = require('cors');
const Chance = require('chance');
const port = 3000;
const app = express();

app.use(cors())
const chance = new Chance();


app.get("*",(req,res)=>{
    
    const users = [];
    for (let i = 0; i < 100; i++) {
        const name = chance.name();
        const profileUrl = `https://randomuser.me/api/portraits/men/${i}.jpg`;
    
        // Generate a random email with @piet.co.in suffix
        const email = `${(name.replace(" ","").toLocaleLowerCase())}@piet.co.in`;
    
        // Push user data to the array
        users.push({
            profileUrl,
            name,
            email
        });
        console.log("res sent");
    }
    res.json(users);
})

app.listen(port);