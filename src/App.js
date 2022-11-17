import "./App.css";
import Template from "./components/templates/Template";
import TodoList from "./components/todolist/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "탄수화물줄이기", checked: false },
    { id: 2, text: "투두리스트완성하기", checked: false },
    { id: 3, text: "게시글등록한거 보이게하기", checked: false },
    { id: 4, text: "리스트 체크삭제 구현하기", checked: false },
    { id: 5, text: "isChecked 삼항연산자하기", checked: false },
    { id: 6, text: "머리감기", checked: false },
  ]);

  return (
    <div className="App">
      <Template />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
