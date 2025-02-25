import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { UserDropdownContentProps } from "../types";
import { UserInfo } from "../UserInfo";
import { UserDropdownMenu } from "./UserDropdownMenu";

export const UserDropdownContent: React.FC<UserDropdownContentProps> = ({
  onClose,
  dropdownItemStyles,
  dropdownItems,
}) => {
  return (
    <>
      <UserInfo name="A. Groshev" email="gav.groshev@gmail.com" />

      <UserDropdownMenu
        onClose={onClose}
        dropdownItemStyles={dropdownItemStyles}
        dropdownItems={dropdownItems}
      />

      <Link
        to="/signin"
        className={dropdownItemStyles}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Sign out
      </Link>
    </>
  );
};