import React from "react";
import "./style.scss";

const TodoItem = (props) => {
  const { onRemove, todo, onSuccess } = props;

  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        {todo.isDone === false ? (
          <button className="successBtn" onClick={() => onSuccess(todo.id)}>
            ✓
          </button>
        ) : (
          <button className="noSuccessBtn" onClick={() => onSuccess(todo.id)}>
            ✓
          </button>
        )}
        <div className="text">{todo.body}</div>
        <button className="deleteBtn" onClick={() => onRemove(todo.id)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
