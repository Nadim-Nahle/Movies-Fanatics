const express = require('express');
const cors = require('cors');
const app= express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const userRouter = require('./app/routes');

const DB_CONNECTION = process.env.DB_CONNECTION;

app.use(bodyParser.json({
    limit: '50mb'
}));

//DB CONNECTION
mongoose.connect(DB_CONNECTION, () => {
    try{
        console.log('db connected');
    }
    catch(error){
        console.log('error');
    }
})

//route
app.use('/api/v1', userRouter);

app.use(cors());
app.use(express.json());
app.listen(5000);