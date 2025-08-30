import React, { useState } from "react";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { KanbanColumn } from "./KanbanColumn";
import logoDark from '../../assets/images/logo_light_w_text.png';

const initialData = {
  todo: [
    { id: "task-1", title: "Finish user onboarding", date: "Tomorrow", tag: "Development", description: "test", image: logoDark },
    { id: "task-2", title: "Solve prioritization issue", date: "Jan 8, 2027", tag: "Marketing" },
    { id: "task-3", title: "Change license and remove products", date: "Jan 8, 2027", tag: "Dev" },
  ],
  inprogress: [
    { id: "task-4", title: "Work in progress Dashboard", date: "Today", tag: "Development" },
    { id: "task-5", title: "Kanban manager", date: "Jan 8, 2027", tag: "Template" },
    { id: "task-6", title: "Product Update – Q4", date: "Today", tag: "Development" },
    { id: "task-7", title: "Figma bot automation", date: "Mar 8, 2027", tag: "Dev" },
  ],
  completed: [
    { id: "task-8", title: "Manage internal feedback", date: "Tomorrow", tag: "Dev" },
    { id: "task-9", title: "React Native + Flutter projects", date: "Jan 8, 2027", tag: "Development" },
    { id: "task-10", title: "Design marketing assets", date: "Jan 8, 2027", tag: "Marketing" },
    { id: "task-11", title: "Kanban flow manager", date: "Jan 8, 2027", tag: "Template" },
  ],
};

export const KanbanPage: React.FC = () => {
  const [columns, setColumns] = useState(initialData);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = [...columns[source.droppableId as keyof typeof columns]];
    const destCol = [...columns[destination.droppableId as keyof typeof columns]];
    const [movedTask] = sourceCol.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCol.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: sourceCol,
      });
    } else {
      destCol.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol,
      });
    }
  };

  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span></span>
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2">
            <i className="bi bi-funnel"></i> Filter & Sort
          </button>
          <button className="btn btn-primary btn-sm">
            <i className="bi bi-plus"></i> Add New Task
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row g-3">
          <KanbanColumn columnId="todo" title="To Do" tasks={columns.todo} tagClass='text-bg-primary'/>
          <KanbanColumn columnId="inprogress" title="In Progress" tasks={columns.inprogress} tagClass='text-bg-warning'/>
          <KanbanColumn columnId="completed" title="Completed" tasks={columns.completed} tagClass='text-bg-success'/>
        </div>
      </DragDropContext>
    </div>
  );
};
