import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { NotificationItem } from './NotificationItem';
import { AppButton, ButtonRadius } from '../../../components/Buttons/AppButton/AppButton';
import { DropdownMenu } from '../../../components/DropdownMenu/DropdownMenu';
import { notifications } from '../../../shared/data/notificationsDropdown';
import './Notifications.css';

export const NotificationDropdownToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Закрываем меню при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="notification-dropdown">
      <div className="notification-dropdown__wrapper position-relative" ref={wrapperRef}>
        <AppButton
          className="notification-dropdown__toggle me-1 me-md-3 dxb-size-40"
          radius={ButtonRadius.Circle}
          icon={faBell}
          onClick={() => setIsOpen((prev) => !prev)} // toggle меню
        />

        <span className="notification-dropdown__counter position-absolute translate-middle badge rounded-pill bg-danger ">
          {notifications.length}
        </span>

        <DropdownMenu isOpen={isOpen} className="notification-dropdown__menu">
          {notifications.map((n) => (
            <NotificationItem key={n.id} notification={n} />
          ))}

          <li className="notification-dropdown__view-all">
            <a href="#">View All Notifications</a>
          </li>
        </DropdownMenu>
      </div>
    </div>
  );
};
