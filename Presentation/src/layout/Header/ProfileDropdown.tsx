import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faCircleInfo, faArrowRightFromBracket, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";
import user from "../../assets/images/owner.png";

export const ProfileDropdown = () => {
  const trigger = (
    <div className="d-flex align-items-center text-decoration-none dropdown-toggle-custom">
      <img src={user} alt="Profile" className="rounded-circle me-2 profilePhoto" />
      <span>A. Groshev</span>
      <FontAwesomeIcon icon={faChevronDown} className="ms-2 dropdown-icon" />
    </div>
  );

  const items = (
    <>
      <li className="px-3 py-2 profile-info">
        <div className="text-regular fw-bold">A. Groshev</div>
        <small>gav.groshev@gmail.com</small>
      </li>
      <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faUser} /> Edit profile</a></li>
      <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faGear} /> Account settings</a></li>
      <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faCircleInfo} /> Support</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="/signin"><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign out</a></li>
    </>
  );

  return (
    <DropdownMenu
      trigger={trigger}
      items={items}
      rootClassName="dropdown"
      menuClassName="dropdown-menu dropdown-menu-end dropdown-menu-wide"
    />
  );
};
