import './App.css';
import axios from "axios";
import React from "react";
import uuid from 'react-uuid'
export default function App() {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleGet = () =>{
    console.log("akash")
    axios.get('http://localhost:8000/posts')
    .then((response) => {
        response.data.map(item=>setTasks([...tasks, item]))
    } )    
    
    .catch(err => console.log(err));
  }
  async function handlePost (){
    if(!task) {
      alert("please provide input")
      return 
    }
    const payload = {
      title: task,
      status: "false"
    }

    const config = {
      url:"http://localhost:8000/posts",
      method: "post",
      data: payload
    }

    await axios(config).then(()=>handleGet())
  }
  return (
    <div className="App">
      <h1>TODO AXIOS POST</h1>
      <input placeholder='Enter task' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handlePost}>POST</button>
      <div>
        {console.log(tasks)}
        {tasks.map(item=><h1 >{item.title}</h1>)}
      </div>
    </div>
  );
}

