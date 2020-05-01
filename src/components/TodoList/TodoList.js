import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  const { todos, removeItem } = props;
  const list = todos.map((todo, index) => (
    <TodoItem key={index} todo={todo} removeItem={removeItem} />
  ));
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}

export default TodoList;
