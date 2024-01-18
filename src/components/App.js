import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formDetails, setFormDetails] = useState("");
  const [formCategory, setFormCategory] = useState("Code")
  
  function removeTask(taskToRemove) {
    setTasksToDisplay((tasksToDisplay) => (
      tasksToDisplay.filter((task) => task.text !== taskToRemove)
    ))
  }

  function onTaskFormSubmit(event) {
    event.preventDefault();
    const newTask = {
      key: formDetails,
      text: formDetails,
      category: formCategory,
    }
    setTasksToDisplay(() => [...tasksToDisplay, newTask]);
    setFormDetails("");
  }

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
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        formCategory={formCategory}
        setFormCategory={setFormCategory}
        onTaskFormSubmit={onTaskFormSubmit} 
      />
      <TaskList 
        tasks={tasksToDisplay} 
        selectedCategory={selectedCategory} 
        onRemoveTask={removeTask} 
      />
    </div>
  );
}

export default App;
