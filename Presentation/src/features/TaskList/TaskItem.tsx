import React from 'react';

interface TaskItemProps {
  title: string;
  label?: string;
  date?: string;
  comments?: number;
  avatar?: string;
  completed?: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, label, date, comments, avatar, completed }) => {
  return (
    <div className="card mb-2">
      <div className="task-item d-flex justify-content-between align-items-center p-2">
        <div className="task-item__text d-flex align-items-center gap-2">
          <i className="fa-solid fa-bars"></i>
          <input
            type="checkbox"
            className="task-item__checkbox form-check-input"
            defaultChecked={completed}
          />
          <span className={completed ? 'text-decoration-line-through' : ''}>{title}</span>
        </div>
        <div className="task-item__meta d-flex align-items-center gap-2">
          {label && <span className="task-item__label">{label}</span>}
          {date && (
            <span className="task-item__date">
              <i className="bi bi-calendar-event"></i> {date}
            </span>
          )}
          {comments !== undefined && (
            <span>
              <i className="bi bi-chat-dots"></i> {comments}
            </span>
          )}
          {avatar && <img src={avatar} className="task-item__avatar rounded-circle" alt="user" />}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
