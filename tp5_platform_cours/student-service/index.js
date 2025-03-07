require("./config/db");
const express = require("express");
const cors = require("cors");
const { Router:UserRouter} = require('./route/user');

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use('/api/v1/user', UserRouter);

app.listen(process.env.SERVER_PORT, (err)=> {
    if(!err) {
        console.log("Server listening to: http://"+process.env.HOST+":"+process.env.SERVER_PORT);
        return;
    }
    console.log(err);
})
