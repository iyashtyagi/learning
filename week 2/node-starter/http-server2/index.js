const express = require("express");
const port = 3000;

const app = express();

// middlewares
app.use(express.json());

const user = [{
    name : "Yash",
    kidneys : [{
        side : "left",
        healthy: true
    },
    {
        side : "right",
        healthy : false
    }]
}]

// GET

app.get('/',(req,res)=>{
    const userInfo = user[0];
    const userKidney = userInfo.kidneys;
    const totalKidney = userKidney.length;
    let healthyKidney = {side : [],number : 0};
    let unhealthyKidney = {side :[], number :0};
    for (let i = 0; i < totalKidney; i++) {
        if(userKidney[i].healthy){
            healthyKidney.side.push(userKidney[i].side);
            healthyKidney.number++;
        }
        else{
            unhealthyKidney.side.push(userKidney[i].side);
            unhealthyKidney.number++;
        }
    }

    res.json({user,userInfo,userKidney,totalKidney,healthyKidney,unhealthyKidney});
})

// POST
app.post("/", (req,res)=>{
    const newKidney = req.body.newKidney;
    user[0].kidneys.push(newKidney);
    res.json(user[0]);
})

// PUT 
app.put("/",(req,res)=>{
    if(isBadKidney()){
        const userKidneys = user[0].kidneys;
        for(let i = 0; i<userKidneys.length; i++){
            userKidneys[i].healthy = true;
        }
        res.send("All set!");
    }
    else{
        res.status(404).json({"msg":"There is no bad kidneys."})
    }
})

// delete
function isBadKidney(){
    for(let i =0; i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            return true;
        }
    }
    return false;
}

app.delete("/", (req,res)=>{
    if(isBadKidney()){
        const userKidneys = user[0].kidneys;
        const newKidney = [];
        // one way of doing it, using splice function
        // for(let i = userKidneys.length-1; i>-1 ; i--){
        //     if(!userKidneys[i].healthy){
        //         user[0].kidneys.splice(i,1);
        //     }
        // }
        // another way of doing this
        for(let i = 0; i<userKidneys.length; i++){
            if(userKidneys[i].healthy){
                newKidney.push(userKidneys[i]);
            }
        }
        user[0].kidneys = newKidney;
        res.send("Done!!")
    }
    else{
        res.status(404).json({"msg":"There is no bad kidneys"});
    }
})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})