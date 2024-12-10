import React, { useState, useEffect, FormEvent } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { Todo, Filter } from '../types';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');
    const [filter, setFilter] = useState<Filter>('all');
    const LIST_LIMIT = 20; 
    const LIST_URL = 'https://jsonplaceholder.typicode.com/todos';

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
            const response = await fetch(LIST_URL);
            const data = await response.json();
            setTodos(data.slice(0, LIST_LIMIT));
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
            const random2 = Math.floor(Math.random() * 1000) + 1000;

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
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleFilterChange = (filter: Filter) => {
        setFilter(filter);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;

        return true;
    });

    return (
        <div className="container mt-4">
            <h1 className="text-center">Todo List</h1>

            <TodoForm
                newTodoTitle={newTodoTitle}
                setNewTodoTitle={setNewTodoTitle}
                handleAddTodo={handleAddTodo}
            />

            <TodoFilter
                currentFilter={filter}
                onFilterChange={handleFilterChange}
            />

            <TodoList
                todos={filteredTodos}
                toggleCompletion={toggleCompletion}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default TodoApp;
