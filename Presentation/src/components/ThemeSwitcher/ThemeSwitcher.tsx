import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from '../../layout/ThemeContext';
import { AppButton, ButtonRadius } from '../Buttons/AppButton/AppButton';
import './ThemeSwitcher.css';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <AppButton
        onClick={toggleTheme}
        className={`theme-toggle ${className}`}
        radius={ButtonRadius.Circle}
        icon={theme === 'light' ? faMoon : faSun}
      />
    </>
  );
};
