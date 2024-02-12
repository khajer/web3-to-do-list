import React, { useState } from 'react';

export default function Container() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'task 1', completed: true },
    { id: 2, text: 'task 2', completed: false },
    { id: 3, text: 'task 3', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  return (
    <>

      task : <input type="text"></input>
      <input type="button" value="save"></input>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.completed ? <del>{task.text}</del> : task.text}
            <a href="#" onClick={(e) => { e.preventDefault(); deleteTask(task.id); }}>delete</a>
          </li>
        ))}
      </ul>
    </>
  )
}

