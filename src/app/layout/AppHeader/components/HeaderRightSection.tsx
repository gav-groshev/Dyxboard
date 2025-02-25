import React from "react";
import { DarkModeSwitcher } from "../../DarkModeSwitcher/DarkModeSwitcher";
import NotificationDropdown from "../../../../components/header/NotificationDropdown";
import UserDropdown from "../../../../components/header/UserDropdown";
import "../AppHeader.css";

interface HeaderRightSectionProps {
  isApplicationMenuOpen: boolean;
}

const HeaderRightSection: React.FC<HeaderRightSectionProps> = ({ isApplicationMenuOpen }) => {
  return (
    <div
      className={`${
        isApplicationMenuOpen ? "flex" : "hidden"
      } app-header-right-section`}
    >
      <div className="flex items-center gap-2 2xsm:gap-3">
        <DarkModeSwitcher />
        <NotificationDropdown />
      </div>
      <UserDropdown />
    </div>
  );
};

export default HeaderRightSection;