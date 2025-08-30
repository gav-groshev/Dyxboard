import React, { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { MainContent } from "./MainContent/MainContent";

export const AppLayout: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => setSidebarVisible((p) => !p);

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      {isSidebarVisible && <SideBar />}
      <div className="flex-grow-1 d-flex flex-column">
        <Header toggleSidebar={toggleSidebar} />
        {/* Внутри MainContent рендерятся дочерние маршруты */}
        <MainContent />
      </div>
    </div>
  );
};
