import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconDefinition;      // FontAwesome иконка
  iconElement?: React.ReactNode; // произвольный элемент слева (например <img>)
  className?: string;         // дополнительные классы для кнопки
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconElement,
  className = "",
  ...rest
}) => {
  return (
    <button type="button" className={`btn ${className}`} {...rest}>
      {icon && <FontAwesomeIcon icon={icon} className="me-2" />}
      {iconElement && <span className="me-2">{iconElement}</span>}
      {children}
    </button>
  );
};
