import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.length === 0) {
      return;
    }

    const taskList = {
      text: newTask,
      complete: false
    }
    setTasks([...tasks, taskList]);
    setNewTask("");
  };

  const handleDelete = (e) => {
    const newTask2 = tasks.filter((task, index) => {
      return index !== e;
    });
    setTasks(newTask2);
  }

  const handleComplete = (e) => {
    const newTasks3 = tasks.map((task, index) => {
      if (e === index) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(newTasks3);
  }
  return (
    <div className="App">
      <form onSubmit={(e) => {
        handleSubmit(e);
      }} >
        <input onChange={(e) => {
          setNewTask(e.target.value);
        }} 
        type="text" value={newTask}></input>
        <div>
        <button style={{margin: "10px"}}>Add</button>
        </div>
      </form>
      {tasks.map((task, index) => {
        const styles = ["list"];
        if (task.complete) {
          styles.push("completed");
        }

        return (
        <div key={index}>
          <span className={styles.join(" ")}>{task.text}</span>
          <input onChange={(e) => {
            handleComplete(index);
          }} type="checkbox" checked={task.complete} />
          <div>
          <button onClick={(e) => {
            handleDelete(index);
          }} style={{marginBottom: "10px"}}>Delete</button>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default App;
