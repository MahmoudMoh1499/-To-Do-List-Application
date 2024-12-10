import React, { ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
    newTodoTitle: string;
    setNewTodoTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: FormEvent) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ newTodoTitle, setNewTodoTitle, handleAddTodo }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(e.target.value);
    };

    return (
        <form onSubmit={handleAddTodo} className="mb-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new todo"
                    value={newTodoTitle}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">
                    Add Todo
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
