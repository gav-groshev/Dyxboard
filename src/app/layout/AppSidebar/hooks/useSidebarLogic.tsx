import { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavItem } from "../types";

export const useSidebarLogic = (navItems: NavItem[], otherItems: NavItem[]) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<{ type: "main" | "others"; index: number } | null>(null);

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : otherItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType as "main" | "others", index });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) setOpenSubmenu(null);
  }, [location, isActive, navItems, otherItems]);

  return { openSubmenu, setOpenSubmenu, isActive };
};