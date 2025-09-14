import React from 'react';
import { NotificationDropdown } from './NotificationDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import './Header.css';

export const HeaderRight: React.FC = () => {
  return (
    <div className="d-flex align-items-center top-bar-right info-panel justify-content-end ">

      <ThemeSwitcher className='me-1 me-md-3'/>
      <NotificationDropdown />
      <ProfileDropdown />
    </div>
  );
};
