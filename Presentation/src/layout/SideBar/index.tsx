import React, { useState, useEffect } from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarMenu } from './SidebarMenu';

export const SideBar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      const currentTheme = html.getAttribute('data-bs-theme') as 'light' | 'dark';
      setTheme(currentTheme);
    });
    observer.observe(html, { attributes: true, attributeFilter: ['data-bs-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="col-md-2 col-lg-2 sidebar p-3 border-end">
      <SidebarHeader theme={theme} />
      <SidebarMenu />
    </aside>
  );
};
