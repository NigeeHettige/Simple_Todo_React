import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {

    const [values,setValues] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const handleInput = (event)=>{
        setValues(prev=>(
            {...prev,[event.target.name]:[event.target.value]}
        ))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,values)
        .then(
            res=>{
                if(res.data.message === 'Error'){
                    alert('Error');
                }else{
                    alert('Successfully updated');
                    navigate('/');
                }
            }
        )
        .catch( e => console.log(e.message) )
        }
       
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type='text' name='title' onChange={handleInput}/>

            <label htmlFor="description">Description</label>
            <input type="text"  name = 'description' onChange={handleInput}/>

            <button type='submit'>Update the task</button>
        </form>
    </div>
  )
}

export default Update;
