import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { NavLink } from 'react-router-dom';

interface SidebarMenuItemProps {
  label: string;
  href: string;
  icon: IconDefinition;
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ label, href, icon }) => {
  return (
    <li className="nav-item mb-2">
      <NavLink to={href} className="nav-link d-flex align-items-center menu-item">
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};
