import React, { useState, useEffect, FormEvent } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from '../types';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        } else {
            fetchTodos();
        }
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setTodos(data.slice(0, 20));  // Limit to the first 20 items
        } catch (error) {
            console.error('Error fetching to-dos:', error);
        }
    };

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const handleAddTodo = (e: FormEvent) => {
        e.preventDefault();

        if (newTodoTitle.trim() === '') {
            return;
        }

        const generateRandomId = () => {
            const random1 = Math.floor(Math.random() * 1000) + 1;
            const random2 = Math.floor(Math.random() * 1000) - 1000;
            return random1 + random2;
        };

        const newTodo: Todo = {
            id: generateRandomId(),
            title: newTodoTitle,
            completed: false,
        };

        setTodos([newTodo, ...todos]);
        setNewTodoTitle('');
    };

    const toggleCompletion = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));  // Remove todo by id
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Todo List</h1>

            <TodoForm
                newTodoTitle={newTodoTitle}
                setNewTodoTitle={setNewTodoTitle}
                handleAddTodo={handleAddTodo}
            />

            <TodoList
                todos={todos}
                toggleCompletion={toggleCompletion}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default TodoApp;
