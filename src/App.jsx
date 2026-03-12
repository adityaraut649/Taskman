import React, { useEffect, useState } from 'react'
import TaskFrom from './components/TaskFrom'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'


export default function App() {

  const [tasks, setTasks] = useState([]);

   useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = () => {

  }

  const deleteTask = ()  => {
    
  }

  return (
    <div>
      <header>
        <h1>TaskBuddy</h1>
        <p><i>Your friendly Manager</i></p>
      </header>

      <TaskFrom addTask={addTask} />
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker />
      <button>clear All Tasks</button>
    </div>
  )
}
