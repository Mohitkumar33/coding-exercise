import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ setTodosList }) => {
  const [taskInput, setTaskInput] = useState("");
  const addTodo = () => {
    const item = {
      id: uuidv4(),
      task: taskInput,
      isDone: false
    };
    setTodosList((prevTodos) => [...prevTodos, item]);
    setTaskInput("");
  };
  return (
    <div className="Input">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
