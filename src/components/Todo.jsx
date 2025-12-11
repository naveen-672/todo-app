import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTodo(e.target.value);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleChange(e)} type="text" value={todo} />
        <button>add</button>
        {console.log(todos)}
      </form>
      {todos.map((item) => (
        <TodoItem key={item} todoItem={item} />
      ))}
    </div>
  );
}
