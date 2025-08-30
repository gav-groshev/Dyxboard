import React from 'react';
import logoLight from '../../assets/images/logo_light_w_text.png';
import logoDark from '../../assets/images/logo_dark_w_text.png';

interface SidebarHeaderProps {
  theme: 'light' | 'dark';
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ theme }) => {
  return (
    <header className="d-flex align-items-center mb-4">
      <img
        src={theme === 'light' ? logoLight : logoDark}
        className="sidebar-logo me-2"
        alt="Logo"
      />
    </header>
  );
};
