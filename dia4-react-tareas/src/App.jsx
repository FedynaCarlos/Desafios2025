import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [delHoverId, setDelHoverId] = useState(null);

  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-body">
      <div className="app-card">
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className={inputFocused ? "input-focused" : ""}
        />
        <button
          onClick={handleAddTask}
          className={btnHover ? "btn-hover" : ""}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Agregar
        </button>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <label className={task.completed ? "completed" : ""}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                {task.text}
              </label>
              <button
                onClick={() => deleteTask(task.id)}
                className={delHoverId === task.id ? "delete-hover" : ""}
                onMouseEnter={() => setDelHoverId(task.id)}
                onMouseLeave={() => setDelHoverId(null)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
