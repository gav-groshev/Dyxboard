export interface Notification {
  id: number;
  avatar: string;
  name: string;
  text: string;
  time: string;
  status:
    | 'notification-dropdown__status--online'
    | 'notification-dropdown__status--offline'
    | 'notification-dropdown__status--busy';
}

// Явно указываем тип массива
export const notifications: Notification[] = [
  {
    id: 1,
    name: 'Terry Franci',
    avatar: 'https://i.pravatar.cc/40?img=1',
    status: 'notification-dropdown__status--online',
    text: 'requests permission to change Project - Nganter App',
    time: '5 min ago',
  },
  {
    id: 2,
    name: 'Alena Franci',
    avatar: 'https://i.pravatar.cc/40?img=2',
    status: 'notification-dropdown__status--offline',
    text: 'requests permission to change Project - Nganter App',
    time: '8 min ago',
  },
];
