import React from 'react';
import { NotificationDropdownToggle } from './NotificationDropdownToggle';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import './Header.css';
import { ProfileDropdownToggle } from './ProfileDropdownToggle';

export const HeaderRight: React.FC = () => {
  return (
    <div className="dxb-header-right d-flex align-items-center top-bar-right info-panel justify-content-end">

      <ThemeSwitcher className='me-1 me-md-3'/>
      <NotificationDropdownToggle />
      <ProfileDropdownToggle />
    </div>
  );
};
