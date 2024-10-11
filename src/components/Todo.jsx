import { useState } from 'react';
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.done).length;
  const totalTasks = tasks.length;

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <Footer completedTasks={completedTasks} totalTasks={totalTasks}/>
    </div>
  );
}
