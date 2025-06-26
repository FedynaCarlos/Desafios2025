import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  // Cargar desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) =>
        filter === "completed" ? t.completed : !t.completed
      );

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <div className="add-task">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribí una tarea"
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>Todas</button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completadas</button>
        <button onClick={() => setFilter("pending")} className={filter === "pending" ? "active" : ""}>Pendientes</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.text}
            </label>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p>Total: {total}</p>
        <p>Completadas: {completed}</p>
        <p>Pendientes: {pending}</p>
      </div>
    </div>
  );
}

export default App;
