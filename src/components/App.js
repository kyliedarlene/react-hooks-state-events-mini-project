import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  function removeTask(taskToRemove) {
    setTasksToDisplay((tasksToDisplay) => (
      tasksToDisplay.filter((task) => task.text !== taskToRemove)
    ))
  }

  function onTaskFormSubmit(newTask) {
    setTasksToDisplay(() => [...tasksToDisplay, newTask]);
  }

  const filteredTasks = tasksToDisplay.filter((task) => (
    (selectedCategory === "All") || (selectedCategory === task.category)
  ))
  console.log(filteredTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit} 
      />
      <TaskList 
        tasks={filteredTasks} 
        selectedCategory={selectedCategory} 
        onRemoveTask={removeTask} 
      />
    </div>
  );
}

export default App;
