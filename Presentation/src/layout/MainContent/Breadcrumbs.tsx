import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuCategories, type MenuItem} from "../menuCategories";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Если главная страница — ничего не отображаем
  if (location.pathname === "/") return null;

  // Функция находит MenuItem по пути
  const findMenuItem = (path: string): MenuItem | undefined => {
    for (const category of menuCategories) {
      const item = category.items.find(i => i.href === path);
      if (item) return item;
    }
    return undefined;
  };

  const currentItem = findMenuItem(location.pathname);

  if (!currentItem) return null; // если не нашли — ничего не показываем

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: currentItem.label, path: location.pathname },
  ];

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li
              key={crumb.path}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? crumb.label : <Link to={crumb.path}>{crumb.label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
