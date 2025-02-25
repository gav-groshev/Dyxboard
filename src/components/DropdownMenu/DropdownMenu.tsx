import { useState } from "react";
import { DropdownButton } from "./components/DropdownButton";
import { DropdownModal } from "./DropdownModal";
import { notifications } from "../../data/notifications"; 

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setHasNewNotifications(false);
  };

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <DropdownButton
        hasNewNotifications={hasNewNotifications}
        onClick={toggleDropdown}
      />
      <DropdownModal
        isOpen={isOpen}
        onClose={closeDropdown}
        notifications={notifications}
      />
    </div>
  );
}