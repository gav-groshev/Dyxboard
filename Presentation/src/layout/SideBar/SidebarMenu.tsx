import React from 'react';
import { SidebarMenuItem } from './SidebarMenuItem';
import { menuCategories } from '../menuCategories';

export const SidebarMenu: React.FC = () => {
  return (
    <nav className='navigation-menu'>
      {menuCategories.map(category => (
        <div key={category.title}>
          <h6 className="menu-text mb-3">{category.title}</h6>
          <ul className="nav flex-column">
            {category.items.map(item => (
              <SidebarMenuItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
