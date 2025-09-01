import React from 'react';
import { NotificationDropdown } from './NotificationDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import './Header.css';

interface HeaderRightProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const HeaderRight: React.FC<HeaderRightProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="d-flex align-items-center top-bar-right info-panel justify-content-end ">

      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <NotificationDropdown />
      <ProfileDropdown />
    </div>
  );
};
