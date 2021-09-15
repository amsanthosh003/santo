const express = require("express");
const server = express();
const bodyParser=require('body-parser');
const config=require("./../config/config.json")

var mongoose = require('mongoose');
server.use(bodyParser.json());



const studentRouter = require('./../router/student');
const classRouter = require('./../router/class');

// console.log("enter")
let { protocal, host, port, name,username,password } = config.app.db;
//  let db= process.env.MONGODB_URL ||`mongodb+srv://admin:admin123@cluster0.qcrci.mongodb.net/schoolsms?retryWrites=true&w=majority`;
 let db= process.env.MONGODB_URL ||'mongodb+srv://santhosh:Santhosh333@cluster0.fmann.mongodb.net/School?retryWrites=true&w=majority';

console.log('connected to the database',db);


mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },function(error){
        if(error)
        {
        console.log(error);
  }
        else
        {
        console.log('connected to the database',db);
        }
	});
	//locationdata





//driverapi
server.use("/student",studentRouter);
server.use("/class",classRouter);
	
module.exports= server;