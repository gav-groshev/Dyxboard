import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../layout/ThemeContext";

interface ThemeSwitcherProps {
  isPrimary?: boolean;
  className? : string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isPrimary = false, className}) => {
    const { theme, toggleTheme } = useTheme();
  
  const btnClass = isPrimary? 'btn-primary' : 'btn-circle';
  return (
    <button
      onClick={toggleTheme}
      className={`btn theme-switcher ${btnClass} btn-outline-secondary me-1 me-md-3 ${className} theme-toggle`}
    >
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
};
