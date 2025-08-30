import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ButtonPosition } from "../../../shared/enums";
import "./IconInput.css";

interface IconInputProps {
  placeholder?: string;
  icon: IconDefinition;
  buttonPosition?: ButtonPosition;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export const IconInput: React.FC<IconInputProps> = ({
  placeholder = "Enter text...",
  icon,
  buttonPosition = ButtonPosition.LEFT,
  value,
  onChange,
  onClick,
}) => {
  return (
    <div className="input-group search-input icon-input">
      {buttonPosition === ButtonPosition.LEFT && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
      )}

      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {buttonPosition === ButtonPosition.RIGHT && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
      )}
    </div>
  );
};
