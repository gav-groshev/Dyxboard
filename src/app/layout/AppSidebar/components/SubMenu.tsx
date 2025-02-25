import { Link } from "react-router";
import { NavItem } from "../types";

export const SubMenu = ({ subItems, isActive, isExpanded, isHovered, isMobileOpen }: {
    subItems: NavItem["subItems"];
    isActive: (path: string) => boolean;
    isExpanded: boolean;
    isHovered: boolean;
    isMobileOpen: boolean;
  }) => (
    <ul className="mt-2 space-y-1 ml-9">
      {subItems?.map((subItem) => (
        <li key={subItem.name}>
          <Link
            to={subItem.path}
            className={`menu-dropdown-item ${
              isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"
            }`}
          >
            {subItem.name}
            {(subItem.new || subItem.pro) && (
              <span className="flex items-center gap-1 ml-auto">
                {subItem.new && <span className="menu-dropdown-badge">new</span>}
                {subItem.pro && <span className="menu-dropdown-badge">pro</span>}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );