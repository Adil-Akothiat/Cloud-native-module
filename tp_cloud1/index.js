const express = require('express');
const app = express();
const Route = require('./routes/routes');

const port = 3000;

app.use(express.json());
app.use('/api/v1', Route);
app.listen(port, (error)=> {
    try {
        console.log('listen to port ', port)
    } catch(error) {
        console.log(error.message);
    }
})
