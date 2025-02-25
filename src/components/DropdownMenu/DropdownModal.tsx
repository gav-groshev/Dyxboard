import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NotificationItem } from "./components/NotificationItem";

interface Notification {
  image: string;
  name: string;
  time: string;
  statusColor: string;
}

interface DropdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
}

export const DropdownModal: React.FC<DropdownModalProps> = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute -right-[240px] mt-[17px] flex h-[480px] w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[361px] lg:right-0">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Notification</h5>
        <button
          onClick={onClose}
          className="text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>

      <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            {...notification}
            onItemClick={onClose}
          />
        ))}
      </ul>

      <Link
        to="/"
        className="block px-4 py-2 mt-3 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        View All Notifications
      </Link>
    </div>
  );
};