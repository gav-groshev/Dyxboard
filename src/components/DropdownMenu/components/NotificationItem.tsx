import React from "react";
import { DropdownItem } from "../../ui/dropdown/DropdownItem";

interface NotificationItemProps {
  image: string; 
  name: string;
  time: string;
  statusColor: string;
  onItemClick: () => void;
  projectName?: string;
  actionText?: string;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  image,
  name,
  time,
  statusColor,
  onItemClick,
  projectName = "Project - Nganter App",
  actionText = "requests permission to change",
}) => (
  <li>
    <DropdownItem
      onItemClick={onItemClick}
      className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
    >
      <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
        <img
          width={40}
          height={40}
          src={image}
          alt="User"
          className="w-full overflow-hidden rounded-full"
        />
        <span
          className={`absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white ${statusColor} dark:border-gray-900`}
        ></span>
      </span>
      <span className="block">
        <span className="mb-1.5 block text-theme-sm text-gray-500 dark:text-gray-400 space-x-1">
          <span className="font-medium text-gray-800 dark:text-white/90">{name}</span>
          <span>{actionText}</span>
          <span className="font-medium text-gray-800 dark:text-white/90">{projectName}</span>
        </span>
        <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
          <span>Project</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{time}</span>
        </span>
      </span>
    </DropdownItem>
  </li>
);