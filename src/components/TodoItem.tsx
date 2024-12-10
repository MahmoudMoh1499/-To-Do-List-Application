import React from 'react';

interface TodoItemProps {
    id: number;
    title: string;
    completed: boolean;
    toggleCompletion: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem = ({
    id,
    title,
    completed,
    toggleCompletion,
    deleteTodo,
}: TodoItemProps) => {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${completed ? 'list-group-item-success' : ''}`}
        >
            <span
                className={`todo-title ${completed ? 'text-decoration-line-through' : ''}`}
                onClick={() => toggleCompletion(id)}
                style={{ cursor: 'pointer' }}
            >
                {title}
            </span>
            <div>
                {completed ? (
                    <span className="badge badge-success">Completed</span>
                ) : (
                    <span className="badge badge-warning">Pending</span>
                )}
                <button
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => deleteTodo(id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
