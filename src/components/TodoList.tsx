import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
    todos: Todo[];
    toggleCompletion: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleCompletion, deleteTodo }: TodoListProps) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleCompletion={toggleCompletion}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
