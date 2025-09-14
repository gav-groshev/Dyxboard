import React from 'react';
import './DropdownMenu.css';

interface DropdownMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <ul className={`dropdown-menu ${className} show`} style={{ position: 'absolute', right: 0 }}>
      {children}
    </ul>
  );
};
