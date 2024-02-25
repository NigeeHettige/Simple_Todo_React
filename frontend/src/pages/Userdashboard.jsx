import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Add from "./Add";

function Userdashboard() {
  const [taskslist, setTasks] = useState([]);
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get("http://localhost:8081/");
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTask();
  }, []);


  const handleDelete = ()=>{
    axios.delete('http://localhost:8081/'+id)
    .then(
        res=>{
            if(res.data.error === 'Error'){
                alert('Deletion Failed');
            }

            alert('Successfully Deleted');
            navigate('/');
        }
    )
    .catch()
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task List</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskslist.map((todo, i) => (
           
              <tr  key={i}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                 
                    <Link to={`/update/${todo.id}`}>update</Link>
                  
                </td>
                <td>
                  <Link to={`/${todo.id}`} onClick={handleDelete}>Delete</Link>
                </td>
              </tr>
           
          ))}
         
        </tbody>
       
      </table> <Link to={'/add '}>Add</Link>
    </div>
  );
}

export default Userdashboard;
