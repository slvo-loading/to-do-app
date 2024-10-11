import TodoItem from "./TodoItem";
import styles from "./css/TodoList.module.css";

export default function TodoList({tasks, setTasks}) {
  const sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTasks.map((item) => (
        <TodoItem item={item} key={item.name} tasks={tasks} setTasks={setTasks}/>
      ))}
    </div>
  );
}
