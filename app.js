const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const moment = require('moment');
const bodyParser = require('body-parser');


const configuration = require('./config');
//Init App
const app = express();

var port = process.env.port || 8000;

//Get models
let user = require('./routes/users');

//db connection
mongoose.connect(configuration.getLocalDb());
let db = mongoose.connection;

//Checks db connection
db.once('open',()=>{
  console.log('Connection established to db');
});

//db on error
db.on('error',(err)=>{
    console.log('Db creates error',err);
});

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//End point to fetch all users
app.use('/users',user);


app.listen(port,()=>{
  console.log('Running on port'+port);
});

