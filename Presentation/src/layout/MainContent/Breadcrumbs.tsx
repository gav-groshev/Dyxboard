import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuCategories, type MenuItem } from "../menuCategories";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/") return null;

  // Функция находит путь до MenuItem по path
  const findMenuPath = (path: string): MenuItem[] | null => {
    const searchItems = (items: MenuItem[], parents: MenuItem[] = []): MenuItem[] | null => {
      for (const item of items) {
        if (item.href === path) {
          return [...parents, item];
        }
        if (item.children) {
          const found = searchItems(item.children, [...parents, item]);
          if (found) return found;
        }
      }
      return null;
    };

    for (const category of menuCategories) {
      const found = searchItems(category.items);
      if (found) return found;
    }

    return null;
  };

  const menuPath = findMenuPath(location.pathname);
  if (!menuPath) return null;

  // Формируем breadcrumbs: Home + путь из menuPath
  const breadcrumbs = [
    { label: "Home", path: "/" },
    ...menuPath.map(item => ({ label: item.label, path: item.href || null })),
  ];

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
  {breadcrumbs.map((crumb, index) => {
    const isLast = index === breadcrumbs.length - 1;
    return (
      <li
        key={crumb.label}
        className={`breadcrumb-item ${isLast ? "active" : ""}`}
        aria-current={isLast ? "page" : undefined}
      >
        {crumb.path && !isLast ? (
          <Link to={crumb.path}>{crumb.label}</Link>
        ) : (
          crumb.label
        )}
      </li>
    );
  })}
</ol>
    </nav>
  );
};
