import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../../assets/images/logo/logo.png";
import SearchBar from "./SearchBar";
import "../AppHeader.css";
interface HeaderLeftSectionProps {
  onToggleSidebar: () => void;
  onToggleApplicationMenu: () => void;
}

const HeaderLeftSection: React.FC<HeaderLeftSectionProps> = ({ onToggleSidebar, onToggleApplicationMenu }) => {
  return (
    <div className="app-header-left-section">
      <button
        className="toggle-menu-btn"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>

      <Link to="/" className="logo lg:hidden">
        <img className="dark:hidden" src={logo} alt="Logo" width={40} />
        <img className="hidden dark:block" src={logo} alt="Logo" width={40} />
      </Link>

      <button
        onClick={onToggleApplicationMenu}
        className="toggle-menu-sm-btn"
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
        <SearchBar />
      
    </div>
  );
};

export default HeaderLeftSection;