import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';
import user from '../../assets/images/owner.png';
import { ProfileDropdownMenu } from './ProfileDropdownMenu';

export const ProfileDropdownToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`profile-dropdown ${isOpen ? 'profile-dropdown--open' : ''}`} ref={wrapperRef}>
      <div className="profile-dropdown__toggle" onClick={() => setIsOpen((prev) => !prev)}>
        <img src={user} alt="Profile" className="profile-dropdown__avatar dxb-size-40" />
        <div className="profile-dropdown__label">
          <span className="profile-dropdown__name">A. Groshev</span>
          <FontAwesomeIcon icon={faChevronDown} className="profile-dropdown__icon" />
        </div>
      </div>

      <DropdownMenu isOpen={isOpen} className="profile-dropdown__menu">
        <ProfileDropdownMenu />
      </DropdownMenu>
    </div>
  );
};
