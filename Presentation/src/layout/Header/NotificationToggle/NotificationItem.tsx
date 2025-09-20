import React from 'react';
import { type Notification } from '../../../shared/data/notificationsDropdown';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  return (
    <li className="notification-dropdown__item">
      <div className="notification-dropdown__avatar">
        <img
          src={notification.avatar}
          className="img-fluid rounded-circle"
          alt={notification.name}
        />
        <span className={`notification-dropdown__status-dot ${notification.status}`}></span>
      </div>
      <div className="notification-dropdown__text">
        <strong>{notification.name}</strong> {notification.text}
        <div className="notification-dropdown__time">{notification.time}</div>
      </div>
    </li>
  );
};
