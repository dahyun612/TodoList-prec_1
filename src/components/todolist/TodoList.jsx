import React from "react";
import TodoItem from "../todoitem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem text={todo.text} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
