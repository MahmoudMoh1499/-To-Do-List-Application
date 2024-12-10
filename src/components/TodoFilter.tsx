import React from 'react';
import { Filter } from '../types';

export interface TodoFilterProps {
    currentFilter: Filter;
    onFilterChange: (filter: Filter) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
    return (
        <div className="mb-4">
            <div className="btn-group" role="group">
                <button
                    className={`btn ${currentFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => onFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={`btn ${currentFilter === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => onFilterChange('completed')}
                >
                    Completed
                </button>
                <button
                    className={`btn ${currentFilter === 'pending' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => onFilterChange('pending')}
                >
                    Pending
                </button>
            </div>
        </div>
    );
};

export default TodoFilter;
