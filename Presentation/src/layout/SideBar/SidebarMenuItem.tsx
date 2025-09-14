import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { NavLink } from 'react-router-dom';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarMenuItemProps {
  label: string;
  href?: string;
  icon?: IconDefinition;
  children?: SidebarMenuItemProps[];
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  label,
  href,
  icon,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const hasChildren = children && children.length > 0;

  return (
    <li className="nav-item mb-2">
      {hasChildren ? (
        <>
          {/* Кнопка раскрытия */}
          <button
            className="nav-link d-flex align-items-center menu-item w-100 text-start btn btn-link"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {icon && <FontAwesomeIcon icon={icon} className="me-2" />}
            <span className="flex-grow-1">{label}</span>
            <FontAwesomeIcon icon={open ? faChevronDown : faChevronRight} />
          </button>

          {/* Вложенные ссылки с Bootstrap анимацией */}
          <ul className={`nav flex-column ms-4 collapse ${open ? 'show' : ''}`}>
            {children!.map((child) => (
              <li key={child.label} className="nav-item mb-1">
                <NavLink to={child.href!} className="nav-link d-flex align-items-center menu-item">
                  {child.icon && <FontAwesomeIcon icon={child.icon} className="me-2" />}
                  <span>{child.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      ) : (
        // Обычный пункт (без вложенных)
        <NavLink to={href!} className="nav-link d-flex align-items-center menu-item">
          {icon && <FontAwesomeIcon icon={icon} className="me-2" />}
          <span>{label}</span>
        </NavLink>
      )}
    </li>
  );
};
