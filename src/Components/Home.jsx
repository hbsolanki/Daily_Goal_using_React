import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((_, i) => i !== index);
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Daily Goal</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" id="add-btn">
          ADD
        </button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : (
        tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))
      )}
    </div>
  );
};

export default Home;
