import styles from './css/TodoItem.module.css';

export default function TodoItem({ item, tasks, setTasks }) {
  function handleDelete(item) {
    setTasks(tasks.filter((task) => task !== item));
  }

  function handleClick(name) {
    setTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, done: !task.done } : task
      )
    );
  }

  const className = item.done ? styles.completed : '';
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
