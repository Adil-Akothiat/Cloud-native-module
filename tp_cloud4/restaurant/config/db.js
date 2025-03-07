require('dotenv').config();
const mongoose = require("mongoose");

const connect = async ()=> {
    await mongoose.connect(process.env.MONGO_URL+process.env.DATABASE_NAME);
}
connect()
.then(()=> console.log("db connected!"))
.catch(err=> console.log(err.message));