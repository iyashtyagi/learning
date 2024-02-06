const express = require('express');

const port = 3000;
const app = express();
app.use(express.json())

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`you have ${kidneysLength} kidneys`);
})


app.use((error, req, res, next)=>{
    res.status(500).json({"error":"Something is wrong with the server"});
})


app.listen(port, () => {
    console.log(`Server started: ${port}`);
})