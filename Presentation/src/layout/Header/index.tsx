import React from 'react';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';
import { useTheme } from '../ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="d-flex justify-content-between border-bottom align-items-center bg-body w-100 px-3 py-2">
      <HeaderLeft toggleSidebar={toggleSidebar} />
      <HeaderRight theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};
