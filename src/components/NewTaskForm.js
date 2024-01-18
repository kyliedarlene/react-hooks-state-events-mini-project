import React from "react";

function NewTaskForm({ 
  categories, 
  formDetails,
  setFormDetails,
  formCategory,
  setFormCategory,
  onTaskFormSubmit,
 }) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit} >
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
