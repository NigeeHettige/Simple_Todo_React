const express = require('express');
const task = express.Router();
const connection = require('./dbConnect');

task.get('/',(req,res)=>{
  const sql = 'SELECT * FROM todo'
  connection.query(sql,(err,data)=>{
    if(err){
        console.log(err.message);
    }
    console.log(data);
    return res.json(data)
  })
   
})

task.post('/add',(req,res)=>{
  try{
    const sql = 'INSERT INTO todo (`title`,`description`) VALUES (?,?)';
    const values = [
      req.body.title,
      req.body.description
    ]
   connection.query(sql,values,(err,data)=>{
      if(err){
        console.log(err.message);
        return res.json({message: "Error"});
      }
      return res.json({message: "Success", data});

   })
  }
  catch(err){
    console.log(err.message);
  }
})


task.put('/update/:id',(req,res)=>{
  try{
    const sql = 'UPDATE todo SET title=?,description=? WHERE id = ?';
    const id = req.params.id;
    const values = [
      req.body.title,
      req.body.description
    ];
    connection.query(sql,[...values,id],(err,data)=>{
      if(err){
        console.log(err.message);
        
        return res.json("Error")
      }
        return res.json(data);
    })
  }
  catch(err){
    console.log(err);
  }

})

task.delete('/delete/:id',(req,res)=>{
  try{
    const sql = "DELETE FROM todo WHERE id = ?";
    const id = req.params.id;
    connection.query(sql,[id],(err,data)=>{
      if(err){
        // console.log(err.message);
        return res.json("Error");
      }
      return res.json(data);
    })
  }
  catch(err){
    console.log(err.message)
  }
})



module.exports = task;