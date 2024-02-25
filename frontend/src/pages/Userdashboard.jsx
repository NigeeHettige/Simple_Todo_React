import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Add from "./Add";

function Userdashboard() {
  const [taskslist, setTasks] = useState([]);

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


  const handleDelete = async (id)=>{
    try{
        axios.delete('http://localhost:8081/delete/'+id);
        window.location.reload();
    } catch(e){
        console.log(e);
    }
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
                  <Link to={`/delete/${todo.id}`} onClick={e => handleDelete(todo.id)}>Delete</Link>
                </td>
              </tr>
           
          ))}
         
        </tbody>
       
      </table> <Link to={'/add '}>Add</Link>
    </div>
  );
}

export default Userdashboard;
