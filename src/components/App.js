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

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} 
      />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList 
        tasks={tasksToDisplay} 
        selectedCategory={selectedCategory} 
        onRemoveTask={removeTask} 
      />
    </div>
  );
}

export default App;
