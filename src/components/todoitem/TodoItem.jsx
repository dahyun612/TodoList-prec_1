import React from "react";
import "./style.scss";

const TodoItem = (todo) => {
  const { text } = todo;

  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <button className="deleteBtn">&times;</button>
        <div style={{ fontSize: "20px", color: "#e62d2d", textAlign: "left" }}>
          {text}
        </div>
        <button className="successBtn">✓</button>
      </div>
    </div>
  );
};

export default TodoItem;
