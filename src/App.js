import "./App.css";
import Template from "./components/templates/Template";
import TodoList from "./components/todolist/TodoList";
import { useState } from "react";
import Form from "./components/form/Form";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, body: "탄수화물줄이기", isDone: false },
    { id: 2, body: "투두리스트완성하기", isDone: true },
  ]);

  const addTodo = (body) => {
    console.log(body);
    const todo = {
      id: todos.length + 1,
      body: body,
      isDone: false,
    };

    setTodos([...todos, todo]);
  };
  //Form에 적용한 이벤트핸들러 form input에 적용한 setValue값이 todos.todo로 적용될수 있도록 함

  function onRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  //filter를 이용 todos배열안에 todo의아이디와 내가 선택한 아이디가 같지 않은 것들만 반환

  function onSuccess(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      )
    );
  } //todos.map을 돌려서 내가 선택한 아이디와 todo.id가 같다면 isDone false를 true로 변경 하거나 아니면 그냥 두거나

  return (
    <div className="App">
      <Template />
      <Form addTodo={addTodo} />
      <TodoList todos={todos} onRemove={onRemove} onSuccess={onSuccess} />
    </div>
  );
}

export default App;
