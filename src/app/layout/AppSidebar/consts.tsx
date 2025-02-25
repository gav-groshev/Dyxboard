import { GridIcon } from "../../../assets/icons";
import { MenuSectionConfig, NavItem } from "./types";

export const navItems: NavItem[] = [
    {
      icon: <GridIcon />,
      name: "MainPage",
      path: "main-page",
    },
  ];
  
export const otherItems: NavItem[] = [];

export const menuSections: MenuSectionConfig[] = [
  {
    title: "Menu",
    items: navItems,
    menuType: "main", 
  },
  {
    title: "Others",
    items: otherItems,
    menuType: "others", 
  },
];