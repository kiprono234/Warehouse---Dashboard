import { useState } from 'react';

export default function TaskList({ tasks: initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-panel">
      <div className="card-header">
        <h3>Task List</h3>
        <a href="#view">View All</a>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              className={`check ${task.completed ? 'checked' : ''}`}
              onClick={() => toggleTask(task.id)}
              aria-label={`Toggle ${task.text}`}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}