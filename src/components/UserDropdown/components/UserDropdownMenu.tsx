import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownItem } from "../../ui/dropdown/DropdownItem";
import { UserDropdownMenuProps } from "../types";



export const UserDropdownMenu: React.FC<UserDropdownMenuProps> = ({
  onClose,
  dropdownItemStyles,
  dropdownItems,
}) => {
  return (
    <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
      {dropdownItems.map((item, index) => (
        <li key={index}>
          <DropdownItem
            onItemClick={onClose}
            tag="a"
            href={item.href}
            className={dropdownItemStyles}
          >
            <FontAwesomeIcon icon={item.icon} className="text-lg" />
            {item.text}
          </DropdownItem>
        </li>
      ))}
    </ul>
  );
};