import React, { useState } from "react";
import TodoList from "../todolist/TodoList";
import "./style.scss";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();
    if (value === "") {
      setErrorMessage("빈 값은 입력할 수 없습니다");
    } else {
      setErrorMessage("");
    }
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleFormSubmit}>
        <input type="text" name="body" value={value} onChange={onChange} />
        <button onClick={() => addTodo(value)}>💖</button>
      </form>
      <p
        style={{
          color: "#34B4CA",
          fontWeight: "bolder",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default Form;
