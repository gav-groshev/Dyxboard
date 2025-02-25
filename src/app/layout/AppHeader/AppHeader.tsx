import React, { useState } from "react";
import { useSidebar } from "../../../context/SidebarContext";
import HeaderLeftSection from "./components/HeaderLeftSection";
import HeaderRightSection from "./components/HeaderRightSection";
import "./AppHeader.css";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    window.innerWidth >= 991 ? toggleSidebar() : toggleMobileSidebar();
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen((prev) => !prev);
  };

  return (
    <header className="app-header">
      <div className="app-header-section">
        <HeaderLeftSection
          onToggleSidebar={handleToggle}
          onToggleApplicationMenu={toggleApplicationMenu}
        />
        <HeaderRightSection isApplicationMenuOpen={isApplicationMenuOpen} />
      </div>
    </header>
  );
};

export default AppHeader;