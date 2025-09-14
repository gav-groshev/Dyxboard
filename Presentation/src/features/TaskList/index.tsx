import React, { useState } from 'react';
import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd';
import TaskFilters from './TaskFilters';
import TaskSection from './TaskSection';
import './TaskList.css';

interface Task {
  id: string;
  title: string;
  label?: string;
  date?: string;
  comments?: number;
  avatar?: string;
  completed?: boolean;
}

interface TaskSections {
  [key: string]: Task[];
}

const initialTasks: TaskSections = {
  'To Do': [
    {
      id: '1',
      title: 'Finish user onboarding',
      label: 'Marketing',
      date: 'Tomorrow',
      comments: 1,
      avatar: 'https://i.pravatar.cc/28?img=1',
    },
    {
      id: '2',
      title: 'Solve Dribble prioritization issue',
      label: 'Marketing',
      date: 'Tomorrow',
      comments: 2,
      avatar: 'https://i.pravatar.cc/28?img=2',
    },
  ],
  'In Progress': [
    {
      id: '3',
      title: 'WIP Dashboard',
      label: 'Template',
      date: 'Jan 8, 2027',
      avatar: 'https://i.pravatar.cc/28?img=3',
    },
    {
      id: '4',
      title: 'Product Update Q4 2024',
      date: 'Jan 8, 2027',
      comments: 2,
      avatar: 'https://i.pravatar.cc/28?img=4',
    },
  ],
  Completed: [
    {
      id: '5',
      title: 'React Native & Flutter projects',
      label: 'Marketing',
      date: 'Feb 12, 2024',
      avatar: 'https://i.pravatar.cc/28?img=5',
      completed: true,
    },
  ],
};

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

  // Выбор фильтрации
  const filteredTasks = Object.fromEntries(
    Object.entries(tasks).filter(([section]) => filter === 'All' || section === filter),
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="card main-content">
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
