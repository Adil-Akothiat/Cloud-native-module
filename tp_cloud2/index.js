require("./config/db");
const express = require("express");
const cors = require("cors");
const { Router:ChefRouter } = require('./routes/Chef');
const { Router:RecetteRouter } = require('./routes/Recette');
const { Router:RestaurantRouter} = require('./routes/Restaurant');
const { Router:UserRouter} = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/chef',ChefRouter);
app.use('/api/v1/recette',RecetteRouter);
app.use('/api/v1/restaurant', RestaurantRouter);
app.use('/api/v1/user', UserRouter);

app.listen(process.env.SERVER_PORT, (err)=> {
    if(!err) {
        console.log("Server listening to: http://"+process.env.HOST+":"+process.env.SERVER_PORT);
        return;
    }
    console.log(err);
})
