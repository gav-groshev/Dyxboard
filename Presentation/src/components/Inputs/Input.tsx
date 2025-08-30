import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import "./Inputs.css";
import { ButtonPosition } from "../../shared/enums";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconDefinition | React.ReactNode; // FontAwesome или любой JSX
  buttonPosition?: ButtonPosition;
  className?: string;
  onIconClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  icon,
  buttonPosition = ButtonPosition.LEFT,
  className = "",
  onIconClick,
  ...rest
}) => {
  const renderIcon = () => {
    if (!icon) return null;

    return (
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onIconClick}
      >
        {typeof icon === "object" && "icon" in icon ? (
          <FontAwesomeIcon icon={icon as IconDefinition} />
        ) : (
          icon
        )}
      </button>
    );
  };

  return (
    <div className={`input-group ${className} icon-input`}>
      {buttonPosition === ButtonPosition.LEFT && renderIcon()}

      <input className="form-control" {...rest} />

      {buttonPosition === ButtonPosition.RIGHT && renderIcon()}
    </div>
  );
};
