import React, { useState } from 'react';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="d-flex justify-content-between border-bottom align-items-center bg-body w-100 px-3 py-2">
      <HeaderLeft toggleSidebar={toggleSidebar} />
      <HeaderRight theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};
