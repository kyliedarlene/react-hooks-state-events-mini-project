import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        if ((selectedCategory === "All") || (selectedCategory === task.category)) {
          return <Task key={task.text} category={task.category} text={task.text} />
        }
      })}
    </div>
  );
}

export default TaskList;
