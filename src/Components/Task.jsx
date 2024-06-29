import React from "react";

const Task = ({ title, description, deleteTask, markAsDone, index }) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>

      <button
        onClick={() => {
          deleteTask(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
