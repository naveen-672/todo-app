import styles from "./todoitem.module.css";

export default function TodoItem({ todoItem, todos, setTodos }) {
  function handleDelete(todoItem) {
    setTodos(todos.filter((todo) => todo !== todoItem));
  }
  function handleClick(item) {
    setTodos(
      todos.map((todo) =>
        todo.name === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const className = todoItem.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(todoItem.name)}>
          {todoItem.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(todoItem)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
