import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Add() {

    const [values,setValues] = useState([]);
    const navigate = useNavigate();
    const handleInput = (event)=>{
        setValues(prev=>(
            {...prev,[event.target.name]:[event.target.value]
            
            }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(values.title !== '' && values.description !== ''){
           axios.post('http://localhost:8081/add',values)
           .then(
                res =>{
                    if(res.data.message === 'Error'){
                        alert("Failed");
                    }else{
                        alert("Success");
                        navigate('/');
                    }
                }
           )
           .catch()
        }
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type='text' name='title'  onChange={handleInput}/>

            <label htmlFor="description">Description</label>
            <input type='text' name='description' onChange={handleInput}/>

            <button type='submit'>Add new book</button>
        </form>
    </div>
  )
}

export default Add;
