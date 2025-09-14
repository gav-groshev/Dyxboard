import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { NotificationItem } from "./NotificationItem";
import { AppButton, ButtonRadius } from "../../components/Buttons/AppButton/AppButton";
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";
import { notifications } from "../../shared/data/notificationsDropdown";

export const NotificationDropdownToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="notification-dropdown-wrapper position-relative">
      <AppButton
        className="me-1 me-md-3 btn-circle"
        radius={ButtonRadius.Circle}
        icon={faBell}
        onClick={() => setIsOpen(prev => !prev)} // toggle меню без конфликта
      />

      <span className="position-absolute translate-middle badge rounded-pill bg-danger notification-counter">
        {notifications.length}
      </span>

      <DropdownMenu
        isOpen={isOpen}
        className="notification-dropdown"
      >
        {notifications.map(n => (
          <NotificationItem key={n.id} notification={n} />
        ))}

        <li className="view-all">
          <a href="#">View All Notifications</a>
        </li>
      </DropdownMenu>
    </div>
  );
};
