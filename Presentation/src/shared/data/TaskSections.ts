export interface Task {
  id: string;
  title: string;
  label?: string;
  date?: string;
  comments?: number;
  avatar?: string;
  completed?: boolean;
}

export interface TaskSections {
  [key: string]: Task[];
}

export const initialTasks: TaskSections = {
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
