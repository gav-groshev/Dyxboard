import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import './AppButton.css';

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonRadius {
  None = "none",
  Slightly = "slightly",
  Circle = "circle",
}

interface AppButtonProps {
  onClick?: () => void;
  className?: string;              // Дополнительные классы
  radius?: ButtonRadius;           // Скругление
  icon?: IconDefinition;           // FA иконка
  text?: string;                   // Текст (опционально)
  hoverText?: string;              // Подсказка при наведении
  toggle?: boolean;                // Тоггл-эффект
}

export const AppButton: React.FC<AppButtonProps> = ({
  onClick,
  className,
  radius = ButtonRadius.None,
  icon,
  text,
  hoverText,
  toggle = false,
}) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    if (toggle) {
      setToggled((prev) => !prev);
    }
    onClick?.();
  };

  const radiusClass = {
    [ButtonRadius.None]: "",
    [ButtonRadius.Slightly]: "rounded",
    [ButtonRadius.Circle]: "rounded-circle",
  }[radius];

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "btn btn-outline-light dxb-btn",
        radiusClass,
        toggled && "active",
        className
      )}
      title={hoverText}
    >
      {icon && <FontAwesomeIcon icon={icon} className={text ? "me-2" : ""} />}
      {text}
    </button>
  );
};
