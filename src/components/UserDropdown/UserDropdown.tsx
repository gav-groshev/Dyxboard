import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import owner from "../../assets/images/user/owner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { dropdownItems } from "../../data/dropdownItems";
import { UserDropdownContent } from "./components/UserDropdownContent";

const dropdownItemStyles = "flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300";

export default function UserDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src={owner} alt="User" />
        </span>

        <span className="block mr-1 font-medium text-theme-sm">A. Groshev</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`stroke-gray-500 text-sm dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <UserDropdownContent
          onClose={closeDropdown}
          dropdownItemStyles={dropdownItemStyles}
          dropdownItems={dropdownItems}
        />
      </Dropdown>
    </div>
  );
}