import React from 'react';

interface TaskFiltersProps {
  selectedFilter: 'All' | 'To Do' | 'In Progress' | 'Completed';
  onChangeFilter: (filter: 'All' | 'To Do' | 'In Progress' | 'Completed') => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ selectedFilter, onChangeFilter }) => {
  const filters: TaskFiltersProps['selectedFilter'][] = [
    'All',
    'To Do',
    'In Progress',
    'Completed',
  ];

  return (
    <div className="task-list__filters card mb-4 p-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <ul className="nav nav-tabs mb-2 mb-md-0">
          {filters.map((filter) => (
            <li className="nav-item" key={filter}>
              <button
                className={`task-list__filter-item nav-link ${selectedFilter === filter ? 'task-list__filter-item--active' : ''}`}
                onClick={() => onChangeFilter(filter)}
              >
                {filter} {filter !== 'All' && <span className="badge bg-light text-dark"></span>}
              </button>
            </li>
          ))}
        </ul>
        <div className="task-list__additional-filters d-flex gap-2">
          <button className="task-list__additional-button btn btn-outline-secondary btn-filter">
            <i className="bi bi-funnel"></i> Filter & Sort
          </button>
          <button className="task-list__additional-button btn btn-primary btn-add">
            <i className="bi bi-plus-lg"></i> Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;
