import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

interface ThemeSwitcherProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-outline-secondary me-3 theme-toggle"
    >
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
};
