import Task from './Task'

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <div className="task-list">
            {tasks.length === 0 && <p>No hay tareas aún.</p>}
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default TaskList

