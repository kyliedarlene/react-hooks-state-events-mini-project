import React from "react";

function Task({ category, text, onRemoveTask }){
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete"
        onClick={() => onRemoveTask(text)}
      >
        X
      </button>
    </div>
  );
}

export default Task;
