import { useState } from 'react';

export default function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={task}
        />
        <button type="submit">
          Add
        </button>
      </form>
      {console.log(tasks)}
    </div>
  );
}
