import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    text={task.text}
                    done={task.done}
                    onClick={() => onToggle(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
}

export default TaskList;
