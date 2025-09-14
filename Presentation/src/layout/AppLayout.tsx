import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { MainContent } from './MainContent/MainContent';

export const AppLayout: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => setSidebarVisible((p) => !p);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // если переходим на desktop, sidebar по умолчанию видим
      if (!mobile) setSidebarVisible(true);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-layout d-flex">
      {/* рендерим sidebar только если он видим */}
      {(isSidebarVisible || !isMobile) && <SideBar visible={isSidebarVisible} />}
      <div className="app-main flex-grow-1 d-flex flex-column">
        <Header toggleSidebar={toggleSidebar} />
        <MainContent />
      </div>
    </div>
  );
};
