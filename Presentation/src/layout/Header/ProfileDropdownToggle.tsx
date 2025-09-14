import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownMenu } from "../../components/DropdownMenu/DropdownMenu";
import user from "../../assets/images/owner.png";
import { ProfileDropdownMenu } from "./ProfileDropdownMenu";

export const ProfileDropdownToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="dxb-profile-menu-toggle profile-dropdown-wrapper position-relative" 
      ref={wrapperRef}
    >
      <div
        className="d-flex align-items-center text-decoration-none dropdown-toggle-custom p-md-0 cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <img src={user} alt="Profile" className="rounded-circle me-1 me-md-2 profilePhoto" />
        <span className="d-none d-md-inline">A. Groshev</span>
        <FontAwesomeIcon icon={faChevronDown} className="ms-2 dropdown-icon d-none d-md-inline" />
      </div>

      <DropdownMenu
        isOpen={isOpen}
        className="dropdown-menu dropdown-menu-end dropdown-menu-wide profile-dropdown"
      >
        <ProfileDropdownMenu />
      </DropdownMenu>
    </div>
  );
};
