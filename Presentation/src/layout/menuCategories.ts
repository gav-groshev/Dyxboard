import { faBullseye, faHouse, faScroll, faGear } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MenuItem {
  label: string;
  href?: string;
  icon: IconDefinition;
  children?: MenuItem[];
  isHidden?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: 'MENU',
    items: [
      { label: 'Main Page', href: '/', icon: faHouse },
      {
        label: 'Planning',
        icon: faBullseye,
        children: [
          { label: 'Task List', href: '/todo', icon: faListCheck },
          { label: 'Kanban', href: '/kanban', icon: faScroll },
        ],
      },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      { label: 'Настройки приложения', href: '/site-settings', icon: faGear, isHidden: true },
      { label: 'Фильмы', href: '/films', icon: faGear },
    ],
  },
];
