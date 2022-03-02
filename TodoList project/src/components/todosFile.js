import React from "react";

const Todos = ({ todosList, setTodosList }) => {
  // const [strike, setStrike] = useState("none");
  const taskComplete = (idToModify) => {
    const changedTodo = todosList.map((item) =>
      item.id === idToModify ? { ...item, isDone: !item.isDone } : item
    );
    setTodosList(changedTodo);
  };
  // const taskComplete = (task) =>
  //   task.isDone === false
  //     ? ((task.isDone = true), setStrike("line-through"))
  //     : ((task.isDone = false), setStrike("none"));

  // const taskComplete = (task) =>
  //   task.isDone === false
  //     ? ((task.isDone = true), setTaskStatus("line-through"))
  //     : ((task.isDone = false), setTaskStatus("none"));
  // const printHi = (strin) => {
  //   console.log(strin);
  // };
  return (
    <div className="Todos">
      <ul>
        {/* <button onClick={printHi("hi")}>temp</button> */}
        {todosList.map((item) => (
          <li
            onClick={()=>taskComplete(item.id)}
            style={{ textDecoration: item.isDone ? "line-through" : "none" }}
            key={item.id}
          >
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
