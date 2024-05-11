require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(express.json());

app.use('/v1', routes);

mongoose.connect(mongoString);

const database = mongoose.connection;
database.on('err',(err)=>{
    console.log(`error connecting to db + ${err}`);
})
database.on('connected',()=>{
    console.log('connected to db success');
})

app.listen(3000,()=>{
    console.log('App is running');
})