import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import { AppRoutes } from "../../routes/AppRoutes";
import { menuCategories, type MenuItem } from "../menuCategories";
import './MainContent.css';

export const MainContent: React.FC = () => {
  const location = useLocation();

  // Находим текущий маршрут в меню
  const findRouteByPath = (path: string): MenuItem | undefined => {
    for (const category of menuCategories) {
      const item = category.items.find(i => i.href === path);
      if (item) return item;
    }
    return undefined;
  };

  const currentRoute = findRouteByPath(location.pathname);

return (
  <>
    <div className="bg-light-subtle flex-grow-1 d-flex  overflow-auto main-scroll">
      <main className="p-4 flex-grow-1 bg-light-subtle">
        {currentRoute && (
          <PageHeader title={currentRoute.label} />
        )}
        <AppRoutes />
        <Outlet />
      </main>
    </div>
  </>
);
};
