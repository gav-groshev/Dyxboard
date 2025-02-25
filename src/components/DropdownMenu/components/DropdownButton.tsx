import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

interface DropdownButtonProps {
  hasNewNotifications: boolean;
  onClick: () => void;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ hasNewNotifications, onClick }) => {
  return (
    <button
      className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      onClick={onClick}
    >
      {hasNewNotifications && (
        <span className="absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400">
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
      )}
      <FontAwesomeIcon icon={faBell} className="text-lg" />
    </button>
  );
};