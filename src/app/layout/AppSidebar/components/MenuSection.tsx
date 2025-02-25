import { HorizontaLDots } from "../../../../assets/icons";
import { MenuItem } from "./MenuItem";
import { MenuSectionProps } from "../types";
import "../AppSidebar.css";

export const MenuSection = ({
  title,
  items,
  menuType,
  isActive,
  isExpanded,
  isHovered,
  isMobileOpen,
  openSubmenu,
  setOpenSubmenu,
}: MenuSectionProps) => {
  const isVisible = isExpanded || isHovered || isMobileOpen;
  const headingClasses = `menu-section ${
    !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
  }`;

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu(
      openSubmenu?.type === menuType && openSubmenu?.index === index
        ? null
        : { type: menuType, index }
    );
  };

  return (
    <div>
      <h2 className={headingClasses}>
        {isVisible ? title : <HorizontaLDots />}
      </h2>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            isActive={isActive}
            isExpanded={isExpanded}
            isHovered={isHovered}
            isMobileOpen={isMobileOpen}
            onClick={() => handleSubmenuToggle(index)}
          />
        ))}
      </ul>
    </div>
  );
};