import React from "react";
import TodoItem from "../todoitem/TodoItem";

const TodoList = ({ todos, onRemove, onSuccess }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            // body={todo.body}
            key={todo.id}
            onRemove={onRemove}
            onSuccess={onSuccess}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
