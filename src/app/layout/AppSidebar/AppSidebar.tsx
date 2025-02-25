import React from "react";
import { useSidebar } from "../../../context/SidebarContext";
import { Logo } from "./components/Logo";
import { MenuSection } from "./components/MenuSection";
import { menuSections, navItems, otherItems } from "./consts";
import { useSidebarLogic } from "./hooks/useSidebarLogic";
import "./AppSidebar.css";

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const { openSubmenu, setOpenSubmenu, isActive } = useSidebarLogic(navItems, otherItems);

  const getSidebarClassName = (
    isExpanded: boolean,
    isMobileOpen: boolean,
    isHovered: boolean
  ): string => {
    const baseClass = "sidebar";
    const expandedClass =
      isExpanded || isMobileOpen || isHovered ? "sidebar-expanded" : "sidebar-collapsed";
    const mobileClass = isMobileOpen ? "translate-x-0" : "-translate-x-full";
    const lgClass = "lg:translate-x-0";
  
    return `${baseClass} ${expandedClass} ${mobileClass} ${lgClass}`;
  };
  
  return (
    <aside
      className={getSidebarClassName(isExpanded, isMobileOpen, isHovered)}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
        <Logo isExpanded={isExpanded} isHovered={isHovered} isMobileOpen={isMobileOpen} />
      </div>
      <div className="sidebar-menu">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {menuSections.map((section, index) => (
              <MenuSection
                key={index}
                title={section.title}
                items={section.items}
                menuType={section.menuType} 
                isActive={isActive}
                isExpanded={isExpanded}
                isHovered={isHovered}
                isMobileOpen={isMobileOpen}
                openSubmenu={openSubmenu}
                setOpenSubmenu={setOpenSubmenu}
              />
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;