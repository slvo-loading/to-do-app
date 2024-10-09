import TodoItem from "./TodoItem";
import styles from "./css/TodoList.module.css";

export default function TodoList({tasks, setTasks}) {
  return (
    <div className={styles.list}>
      {tasks.map((item) => (
        <TodoItem item={item} key={item.name} tasks={tasks} setTasks={setTasks}/>
      ))}
    </div>
  );
}
