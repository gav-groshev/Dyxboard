import { faBullseye, faHouse, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MenuItem {
  label: string;
  href?: string;
  icon: IconDefinition;
  children?: MenuItem[];
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  
}

export const menuCategories: MenuCategory[] = [
  {
    title: 'MENU',
    items: [
      { label: 'Main Page', href: '#/', icon: faHouse },
      { label: 'Profile', href: '#/profile', icon: faUser },
      { 
        label: 'Planning', 
        icon: faBullseye ,
        children:[
          { label: 'Task List', href: '#/todo', icon: faListCheck },
          { label: 'Kanban', href: '#/kanban', icon: faScroll },
        ]
      },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      // Здесь можно добавлять новые элементы
    ],
  },
];
