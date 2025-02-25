import { navItems, otherItems } from "./consts";

export type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
  };

export interface LogoProps {
  isExpanded: boolean;
  isHovered: boolean;
  isMobileOpen: boolean;
}

export interface MenuItemProps {
  item: NavItem;
  isActive: (path: string) => boolean;
  isExpanded: boolean;
  isHovered: boolean;
  isMobileOpen: boolean;
  onClick?: () => void;
}

export interface MenuSectionProps {
  title: string;
  items: NavItem[];
  menuType: "main" | "others";
  isActive: (path: string) => boolean;
  isExpanded: boolean;
  isHovered: boolean;
  isMobileOpen: boolean;
  openSubmenu: { type: "main" | "others"; index: number } | null;
  setOpenSubmenu: (value: { type: "main" | "others"; index: number } | null) => void;
}

export type MenuSectionConfig = {
  title: string;
  items: typeof navItems | typeof otherItems;
  menuType: "main" | "others"; // Explicitly define the type here
};