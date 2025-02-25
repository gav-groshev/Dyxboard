import React from "react";
import { DarkModeSwitcher } from "../../DarkModeSwitcher/DarkModeSwitcher";
import UserDropdownMenu from "../../../../components/UserDropdown/UserDropdown";
import "../AppHeader.css";
import DropdownMenu from "../../../../components/DropdownMenu/DropdownMenu";

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
        <DropdownMenu />
      </div>
      <UserDropdownMenu />
    </div>
  );
};

export default HeaderRightSection;