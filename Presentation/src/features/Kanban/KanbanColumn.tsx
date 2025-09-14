import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { KanbanTask } from './KanbanTask';

interface ColumnProps {
  columnId: string;
  title: string;
  tasks: {
    id: string;
    description?: string;
    image?: string;
    title: string;
    date?: string;
    comments?: number;
    tag: string;
  }[];
  tagClass?: string;
}

export const KanbanColumn: React.FC<ColumnProps> = ({ columnId, title, tasks, tagClass }) => {
  console.log(tasks); // Логируем здесь
  return (
    <div className="col-md-4 kanban-column">
      <h6 className="mb-3 d-flex align-items-center">
        {title}
        <span className={`badge ${tagClass} ms-2`}>{tasks.length}</span>
      </h6>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => {
              console.log(task); // Логируем здесь
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-3"
                    >
                      <KanbanTask task={task} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
