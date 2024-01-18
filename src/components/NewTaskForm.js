import React, {useState} from "react";

function NewTaskForm({ 
  categories, 
  onTaskFormSubmit,
 }) {
  const [formDetails, setFormDetails] = useState("");
  const [formCategory, setFormCategory] = useState("Code")
  
  function createNewTask(event) {
    event.preventDefault();
    const newTask = {
      key: formDetails,
      text: formDetails,
      category: formCategory,
    }
    onTaskFormSubmit(newTask);
    setFormDetails("");
  }

  return (
    <form className="new-task-form" onSubmit={createNewTask} >
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={formDetails}
          onChange={(event) => setFormDetails(event.target.value)} 
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setFormCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            if (category !== "All") {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
