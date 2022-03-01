import "./styles.css";
import React, { useState } from "react";
import Input from "./components/inputFile";
import Todos from "./components/todosFile";

export default function App() {
  const [todosList, setTodosList] = useState([]);
  // const todosList = [
  //   {
  //     id: 1,
  //     task: "buy vegetable",
  //     isDone: false
  //   },
  //   {
  //     id: 2,
  //     task: "buy milk",
  //     isDone: false
  //   }
  // ];
  return (
    <div className="App">
      <h1>ToDo list By Mohit</h1>
      <Input setTodosList={setTodosList} />
      <Todos todosList={todosList} setTodosList={setTodosList} />
    </div>
  );
}
