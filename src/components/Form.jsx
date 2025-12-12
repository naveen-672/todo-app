import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

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
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => handleChange(e)} type="text" value={todo} />
      <button>add</button>
      {console.log(todos)}
    </form>
  );
}
