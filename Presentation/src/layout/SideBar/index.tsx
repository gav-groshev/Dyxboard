import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarMenu } from './SidebarMenu';
import { useTheme } from '../ThemeContext';
import './Sidebar.css';
interface SideBarProps {
  visible?: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ visible = true }) => {
  const { theme } = useTheme();

  return (
    <aside className={`app-sidebar ${visible ? 'app-sidebar--visible' : ''}`}>
      <SidebarHeader theme={theme} />
      <SidebarMenu />
    </aside>
  );
};
