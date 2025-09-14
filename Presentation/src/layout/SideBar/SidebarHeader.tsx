import React from 'react';
import logoLight from '../../assets/images/logo_light_w_text.png';
import logoDark from '../../assets/images/logo_dark_w_text.png';
import { Link } from 'react-router-dom';

interface SidebarHeaderProps {
  theme: 'light' | 'dark';
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ theme }) => {
  return (
    <header className="d-flex align-items-center sidebar-logo">
      <Link to={'/'}>
        <img src={theme === 'light' ? logoLight : logoDark} className="sidebar-logo" alt="Logo" />
      </Link>
    </header>
  );
};
