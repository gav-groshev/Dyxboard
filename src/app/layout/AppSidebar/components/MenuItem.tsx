import { Link } from "react-router";
import { ChevronDownIcon } from "../../../../assets/icons";
import { MenuItemProps } from "../types";

export const MenuItem = ({
  item,
  isActive,
  isExpanded,
  isHovered,
  isMobileOpen,
  onClick,
}: MenuItemProps) => {
  const isVisible = isExpanded || isHovered || isMobileOpen;
  const isItemActive = item.path && isActive(item.path);

  const menuItemClasses = `menu-item group ${
    isItemActive ? "menu-item-active" : "menu-item-inactive"
  } ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`;

  const iconClasses = isItemActive ? "menu-item-icon-active" : "menu-item-icon-inactive";

  const renderContent = () => (
    <>
      <span className={iconClasses}>{item.icon}</span>
      {isVisible && (
        <>
          <span className="menu-item-text">{item.name}</span>
          {item.subItems && (
            <ChevronDownIcon className="ml-auto w-5 h-5 transition-transform duration-200" />
          )}
        </>
      )}
    </>
  );

  return (
    <li>
      {item.subItems ? (
        <button onClick={onClick} className={menuItemClasses}>
          {renderContent()}
        </button>
      ) : (
        item.path && (
          <Link to={item.path} className={menuItemClasses}>
            {renderContent()}
          </Link>
        )
      )}
    </li>
  );
};