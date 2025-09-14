import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import './AppButton.css';

export enum ButtonRadius {
  None = 'none',
  Slightly = 'slightly',
  Circle = 'circle',
}

interface AppButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string; // Дополнительные классы
  radius?: ButtonRadius; // Скругление
  icon?: IconDefinition; // FA иконка
  text?: string; // Текст (опционально)
  hoverText?: string; // Подсказка при наведении
  toggle?: boolean; // Тоггл-эффект
  children?: React.ReactNode;
}
export const AppButton: React.FC<AppButtonProps> = ({
  onClick,
  className,
  radius = ButtonRadius.None,
  icon,
  text,
  hoverText,
  toggle = false,
  children,
}) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (toggle) {
      setToggled((prev) => !prev);
    }
    onClick?.(event);
  };

  const radiusClass = {
    [ButtonRadius.None]: '',
    [ButtonRadius.Slightly]: 'rounded',
    [ButtonRadius.Circle]: 'rounded-circle',
  }[radius];

  const button = (
    <button
      onClick={handleClick}
      className={clsx('btn btn-outline-light dxb-btn', radiusClass, toggled && 'active', className)}
      title={hoverText}
    >
      {icon && <FontAwesomeIcon icon={icon} className={text ? 'me-2' : ''} />}
      {text}
    </button>
  );

  if (children) {
    return (
      <div className="dxb-btn-wrapper position-relative">
        <div className="dxb-btn-children position-absolute translate-middle">{children}</div>
        {button}
      </div>
    );
  }

  return button;
};
