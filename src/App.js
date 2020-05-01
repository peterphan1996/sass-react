import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodoItem = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
    }
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const removeItem = (item) => {
    const filterTodos = todos.filter(function (value, index, arr) {
      return value !== item;
    });
    setTodos(filterTodos);
  };
  return (
    <div className="App">
      <input
        label="Add todo item"
        value={inputValue}
        onChange={onChange}
      ></input>
      <button className="btn" onClick={addTodoItem}>
        Add
      </button>
      <TodoList todos={todos} removeItem={removeItem} />
    </div>
  );
}

export default App;
