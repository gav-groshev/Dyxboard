import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import './DarkModeSwitcher.css';

export const DarkModeSwitcher: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark-mode-switcher"
    >
      <FontAwesomeIcon icon={faMoon}/>
      <FontAwesomeIcon icon={faSun}/>
    </button>
  );
};
