import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import { menuCategories, type MenuItem } from "../menuCategories";
import './MainContent.css';

export const MainContent: React.FC = () => {
  const location = useLocation();

  // Находим текущий маршрут в меню
const findRouteByPath = (path: string): MenuItem | undefined => {
  const searchItems = (items: MenuItem[]): MenuItem | undefined => {
    for (const item of items) {
      if (item.href === path) return item;
      if (item.children) {
        const found = searchItems(item.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  for (const category of menuCategories) {
    const found = searchItems(category.items);
    if (found) return found;
  }

  console.log(path);
  return undefined;
};


  const currentRoute = findRouteByPath(location.pathname);

return (
  <>
    <div className="bg-light-subtle flex-grow-1 d-flex  overflow-auto main-scroll">
      <main className="p-2 p-md-4 flex-grow-1 bg-light-subtle">
        {currentRoute && (
          <PageHeader title={currentRoute.label} />
        )}
        <Outlet />
      </main>
    </div>
  </>
);
};
