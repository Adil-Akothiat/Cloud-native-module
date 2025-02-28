require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.SERVER_PORT, (err)=> {
    if(!err) {
        console.log("Server listening to: http://"+process.env.HOST+":"+process.env.SERVER_PORT);
        return;
    }
    console.log(err);
})
