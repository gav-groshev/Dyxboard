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
    <div className="card card-task p-3">
      <p className="mb-1">{task.title}</p>
      {/* Описание */}
      {task.description && <p className="text-muted mb-2 small">{task.description}</p>}

      {/* Картинка */}
      {task.image && (
        <img src={task.image} alt="Task illustration" className="img-fluid rounded mb-2" />
      )}
      <small className="text-muted">
        {task.date && (
          <>
            <FontAwesomeIcon icon={faCalendar} /> {task.date}
          </>
        )}
      </small>
      <br />
      <span className={`badge text-bg-primary mt-2 align-self-start`}>{task.tag}</span>
    </div>
  );
};
