import React, { useState } from 'react';
import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd';
import TaskFilters from './TaskFilters';
import TaskSection from './TaskSection';
import './TaskList.css';
import { initialTasks, type TaskSections } from '../../shared/data/TaskSections';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskSections>(initialTasks);
  const [filter, setFilter] = useState<'All' | 'To Do' | 'In Progress' | 'Completed'>('All');

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setTasks((prev) => ({ ...prev, [source.droppableId]: sourceTasks }));
    } else {
      const destTasks = Array.from(tasks[destination.droppableId]);
      destTasks.splice(destination.index, 0, movedTask);
      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destTasks,
      }));
    }
  };

  const filteredTasks = Object.fromEntries(
    Object.entries(tasks).filter(([section]) => filter === 'All' || section === filter),
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="card task-list">
        <div className="container p-3">
          <TaskFilters selectedFilter={filter} onChangeFilter={setFilter} />
          {Object.entries(filteredTasks).map(([sectionTitle, sectionTasks]) => (
            <Droppable droppableId={sectionTitle} key={sectionTitle}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TaskSection title={sectionTitle} tasks={sectionTasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default TaskList;
