import React from "react";
import "./TodoItem.scss";

function TodoItem(props) {
  const { todo, key, removeItem } = props;
  return (
    <div className="todoItem">
      <li key={key}>{todo}</li>
      <button
        className="removeBtn"
        onClick={() => {
          removeItem(todo);
        }}
      >
        x
      </button>
    </div>
  );
}

export default TodoItem;
