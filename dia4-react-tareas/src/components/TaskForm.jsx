import { useState } from 'react'

function TaskForm({ onAddTask }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTask(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Escribí una tarea"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default TaskForm
