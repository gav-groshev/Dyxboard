import React from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import "./Inputs.css";
import { ButtonPosition } from "../../shared/enums";
import { AppButton, ButtonRadius } from "../Buttons/AppButton/AppButton";

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
      <AppButton
              onClick={onIconClick}
              className="search-btn"
              radius={ButtonRadius.None}
              icon={icon as IconDefinition}
            />
    );
  };

  return (
    <div className={`input-group ${className} icon-input dxb-height-40`}>
      {buttonPosition === ButtonPosition.LEFT && renderIcon()}

      <input className="form-control" {...rest} />

      {buttonPosition === ButtonPosition.RIGHT && renderIcon()}
    </div>
  );
};
