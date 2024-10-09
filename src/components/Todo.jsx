import { useState } from 'react';
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
