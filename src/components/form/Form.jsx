import React, { useState } from "react";
import "./style.scss";

const Form = (setTodos) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();

    setErrorMessage("");
    if (value === "") {
      setErrorMessage("빈 값은 입력할 수 없습니다");
      return;
    }
  }

  function handleFormInput(event) {
    setValue(event.target.value);
  }

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={value}
          onChange={handleFormInput}
        />
        <button type="submit">💖</button>
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
