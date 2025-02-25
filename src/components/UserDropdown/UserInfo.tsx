import React from "react";

interface UserInfoProps {
  name: string;
  email: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <div>
      <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
        {name}
      </span>
      <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
        {email}
      </span>
    </div>
  );
};