import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGear,
  faCircleInfo,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export const ProfileDropdownMenu = () => {
  return (
    <>
      <li className="px-3 py-2 profile-info">
        <div className="text-regular fw-bold">A. Groshev</div>
        <small className="profile-info__email">gav.groshev@gmail.com</small>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) => `profile-dropdown__item ${isActive ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faUser} /> Edit profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/site-settings"
          className={({ isActive }) => `profile-dropdown__item ${isActive ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faGear} /> Account settings
        </NavLink>
      </li>
      <li>
        <a className="profile-dropdown__item" href="#">
          <FontAwesomeIcon icon={faCircleInfo} /> Support
        </a>
      </li>
      <li>
        <hr className="profile-dropdown__divider" />
      </li>
      <li>
        <Link className="profile-dropdown__item" to="/signin">
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign out
        </Link>
      </li>
    </>
  );
};
