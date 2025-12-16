import React from 'react';
import { SidebarMenuItem } from './SidebarMenuItem';
import { menuCategories } from '../menuCategories';

export const SidebarMenu: React.FC = () => {
  // Функция для фильтрации скрытых элементов и их детей
  const filterHiddenItems = (items: typeof menuCategories[0]['items']) => {
    return items
      .filter((item) => !item.isHidden)
      .map((item) => {
        // Если у элемента есть children, фильтруем их тоже
        if (item.children) {
          const filteredChildren = filterHiddenItems(item.children);
          return { ...item, children: filteredChildren };
        }
        return item;
      });
  };

  return (
    <nav className="navigation-menu">
      {menuCategories.map((category) => {
        const visibleItems = filterHiddenItems(category.items);
        // Не показываем категорию, если в ней не осталось видимых элементов
        if (visibleItems.length === 0) return null;

        return (
          <div key={category.title}>
            <h6 className="menu-text mb-3">{category.title}</h6>
            <ul className="nav flex-column">
              {visibleItems.map((item) => (
                <SidebarMenuItem key={item.label} {...item} />
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};
