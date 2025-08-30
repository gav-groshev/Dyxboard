import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarMenu } from './SidebarMenu';
import { useTheme } from '../ThemeContext';

export const SideBar: React.FC = () => {
 const { theme } = useTheme();
  return (
    <aside className="col-md-2 col-lg-2 sidebar p-3 border-end">
      <SidebarHeader theme={theme} />
      <SidebarMenu />
    </aside>
  );
};
