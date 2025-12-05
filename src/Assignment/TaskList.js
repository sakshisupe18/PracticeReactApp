import React, { useState } from "react";
function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);
  const toggleStatus = (index) => {
    const newTasks = [...tasks];  
    newTasks[index].status = 
      newTasks[index].status === "done" ? "not done" : "done";

    setTasks(newTasks); 
  };
  return (
    <div>
      <h2>Employee Task List</h2>
      {tasks.map((task, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{task.name}</strong> - {task.status}
          <button onClick={() => toggleStatus(index)} 
            style={{ marginLeft: "10px" }}>Toggle Status</button>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
