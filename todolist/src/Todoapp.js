import React, { useState } from "react";
import "./style.css";

const Todoapp = () => {
  const todoAdder = () => {
    setToDos();
  };

  const [todos, setToDos] = useState([""]);

  return (
    <div className="main-body">
      {/* For the title of to do app  */}
      <div className="title-div">
        <h3 id="title">To do App</h3>
      </div>

      {/* to do list  */}
      <ul className="todo-class">
        {todos.map((todo) => (
          <li className="todo-item">{todo}</li>
        ))}
      </ul>

      <input type="text" onChange={(event) => setToDos(event.target.value)} />
      <br></br>

      <button>Add to do</button>
    </div>
  );
};

export default Todoapp;
