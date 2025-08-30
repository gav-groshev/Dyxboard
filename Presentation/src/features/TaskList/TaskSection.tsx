import React from "react";
import TaskItem from "./TaskItem";
import { Draggable } from "@hello-pangea/dnd";

interface Task {
  id: string;
  title: string;
  label?: string;
  date?: string;
  comments?: number;
  avatar?: string;
  completed?: boolean;
}

interface TaskSectionProps {
  title: string;
  tasks: Task[];
}

const TaskSection: React.FC<TaskSectionProps> = ({ title, tasks }) => {
  return (
    <div className="mt-4">
      <h6 className="fw-bold mb-2">{title} <span className="text-muted">{tasks.length}</span></h6>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskItem {...task} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default TaskSection;
