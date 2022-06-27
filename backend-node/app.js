const express = require('express');
const app= express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const userRouter = require('./app/routes');

const DB_CONNECTION = process.env.DB_CONNECTION;

app.use(bodyParser.json());

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
app.use('/api', userRouter);

app.use(express.json());
app.listen(5000);