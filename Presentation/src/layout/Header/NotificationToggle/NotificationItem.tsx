import React from 'react';
import { type Notification } from '../../../shared/data/notificationsDropdown';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  return (
    <li className="notification-item">
      <div className="notification-avatar">
        <img
          src={notification.avatar}
          className="img-fluid rounded-circle"
          alt={notification.name}
        />
        <span className={`status-dot status-${notification.status}`}></span>
      </div>
      <div className="notification-text">
        <strong>{notification.name}</strong> {notification.text}
        <div className="notification-time">{notification.time}</div>
      </div>
    </li>
  );
};
