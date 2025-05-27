function TaskItem({ text, done, onClick, onDelete }) {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '6px',
                fontSize: '18px',
                textDecoration: done ? 'line-through' : 'none',
                cursor: 'pointer',
            }}
        >
            <span onClick={onClick} style={{ flex: 1 }}>{text}</span>
            <button onClick={onDelete} style={{
                marginLeft: '10px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
            }}>
                Borrar
            </button>
        </li>
    );
}

export default TaskItem;
