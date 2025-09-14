import { faBell} from "@fortawesome/free-regular-svg-icons";
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";
import { AppButton, ButtonRadius } from "../../components/Buttons/AppButton/AppButton";

const notifications = [
  {
    id: 1,
    name: "Terry Franci",
    avatar: "https://i.pravatar.cc/40?img=1",
    status: "online",
    text: "requests permission to change Project - Nganter App",
    time: "5 min ago",
  },
  {
    id: 2,
    name: "Alena Franci",
    avatar: "https://i.pravatar.cc/40?img=2",
    status: "online",
    text: "requests permission to change Project - Nganter App",
    time: "8 min ago",
  },
];

export const NotificationDropdown = () => {
  /*TODO: подумать над необходимостью trigger */
  const trigger = (
    <>
      <AppButton
        className={`me-1 me-md-3 btn-circle`}
        radius={ButtonRadius.Circle}
        icon={faBell}
      />
      <span className="position-absolute translate-middle badge rounded-pill bg-danger notification-counter">
        {notifications.length}
      </span>
    </>
  );

  const items = (
    <>
      {notifications.map((n) => (
        <li key={n.id} className="notification-item">
          <div className="notification-avatar">
            <img
              src={n.avatar}
              className="img-fluid rounded-circle"
              alt={n.name}
            />
            <span className={`status-dot status-${n.status}`}></span>
          </div>
          <div className="notification-text">
            <strong>{n.name}</strong> {n.text}
            <div className="notification-time">{n.time}</div>
          </div>
        </li>
      ))}
      <li className="view-all">
        <a href="#">View All Notifications</a>
      </li>
    </>
  );

  return (
    <DropdownMenu
      trigger={trigger}
      items={items}
      buttonClassName=""
      menuClassName="dropdown-menu dropdown-menu-end notification-dropdown"
    />
  );
};
