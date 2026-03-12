import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
  return (
      <ul>
        {tasks.map((task, index) => (
     <li key = {index}>
         <div>
          <span>{task.text}</span>
          <small>{task.priority} , {task.category}</small>
         </div>
         <div>
          <button>{task.Complete ? "Undo" : "Complete"}</button>
          <button>Delete</button>
         </div>
     </li>
        ))}
      </ul>
  )
}
