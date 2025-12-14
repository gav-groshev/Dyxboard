import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGear,
  faCircleInfo,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ProfileDropdownMenu = () => {
  return (
    <>
      <li className="px-3 py-2 profile-info">
        <div className="text-regular fw-bold">A. Groshev</div>
        <small className="profile-info__email">gav.groshev@gmail.com</small>
      </li>
      <li>
        <a className="profile-dropdown__item" href="#">
          <FontAwesomeIcon icon={faUser} /> Edit profile
        </a>
      </li>
      <li>
        <a className="profile-dropdown__item" href="#">
          <FontAwesomeIcon icon={faGear} /> Account settings
        </a>
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
