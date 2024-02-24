
const express = require('express');
const connection = require('./dbConnect');
const cors = require('cors');
const task = require('./task');

const app = express();

app.use(express.json());
app.use(cors());
app.use(task);

connection.connect((err)=>{
    if(err){
        console.log("database connection failed")
    }
    console.log("Database connected successfully");
})







app.listen(8081,()=>{
    console.log("connected to backend")
})