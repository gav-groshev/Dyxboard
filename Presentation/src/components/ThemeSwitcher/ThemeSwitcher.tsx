import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

interface ThemeSwitcherProps {
  theme: "light" | "dark";
  isPrimary?: boolean;
  className? : string;
  toggleTheme: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, isPrimary = false, className, toggleTheme}) => {
  
  const btnClass = isPrimary? 'btn-primary' : 'btn-circle';
  return (
    <button
      onClick={toggleTheme}
      className={`btn ${btnClass} btn-outline-secondary me-3 ${className} theme-toggle`}
    >
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
};
