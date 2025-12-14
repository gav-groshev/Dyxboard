import React from 'react';
import { NotificationDropdownToggle } from './NotificationToggle/NotificationDropdownToggle';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import './Header.css';
import { ProfileDropdownToggle } from './ProfileDropdownToggle';

export const HeaderRight: React.FC = () => {
  return (
    <div className="header__right-menu d-flex align-items-center">
      <ThemeSwitcher className="d-flex me-1 me-md-3" />
      <NotificationDropdownToggle />
      <ProfileDropdownToggle />
    </div>
  );
};
