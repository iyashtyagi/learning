const express =  require("express");
const { dbConnect } = require("./db");
const mainRouter = require("./routes/routerIndex");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

dbConnect();
app.use("/api/v1/",mainRouter);

app.listen(PORT, (err)=>{
    if(err){
        console.error(err);
    }
    console.log(`Server listening on PORT ${PORT}`);
})