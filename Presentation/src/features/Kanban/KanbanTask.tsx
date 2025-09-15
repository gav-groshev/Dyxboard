import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TaskProps {
  task: {
    id: string;
    description?: string;
    image?: string;
    title: string;
    date?: string;
    comments?: number;
    tag: string;
  };
}

export const KanbanTask: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="kanban-task card p-3">
      <p className="kanban-task__title mb-1">{task.title}</p>
      {/* Описание */}
      {task.description && (
        <p className="kanban-task__description text-muted mb-2 small">{task.description}</p>
      )}

      {/* Картинка */}
      {task.image && (
        <img
          src={task.image}
          alt="Task illustration"
          className="kanban-task__image img-fluid rounded mb-2"
        />
      )}
      <small className="kanban-task__date text-muted">
        {task.date && (
          <>
            <FontAwesomeIcon icon={faCalendar} /> {task.date}
          </>
        )}
      </small>
      <br />
      <span className={`kanban-task__badge badge text-bg-primary mt-2 align-self-start`}>
        {task.tag}
      </span>
    </div>
  );
};
