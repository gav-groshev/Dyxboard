import React from "react";
import "./DropdownMenu.css";
import type { DropdownMenuProps } from "./DropdownMenuProps";

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  buttonClassName = "btn dropdown-menu-custom",
  menuClassName = "dropdown-menu dropdown-menu-end",
  rootClassName = "dropdown"
}) => {
  return (
    <div className={rootClassName}>
      <div
        className={buttonClassName}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {trigger}
      </div>
      <ul className={menuClassName}>{items}</ul>
    </div>
  );
};
