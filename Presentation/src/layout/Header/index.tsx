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
<header className="border-bottom bg-body w-100 px-3 py-2">
  <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
    {/* Левая часть */}
    <div className="mb-2 mb-md-0">
      <HeaderLeft toggleSidebar={toggleSidebar} />
    </div>

    {/* Правая часть */}
    <div>
      <HeaderRight theme={theme} toggleTheme={toggleTheme} />
    </div>
  </div>
</header>

  );
};
