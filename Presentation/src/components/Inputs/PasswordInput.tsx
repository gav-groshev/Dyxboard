import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Input } from "./Input";
import type { InputProps } from "./Input";
import { ButtonPosition } from "../../shared/enums";

interface PasswordInputProps extends Omit<InputProps, "type" | "icon"> {
  icon?: typeof faEye | typeof faEyeSlash; // можно переопределить
  buttonPosition?: ButtonPosition;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  icon = faEye,
  buttonPosition = ButtonPosition.RIGHT,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      icon={showPassword ? faEyeSlash : icon}
      buttonPosition={buttonPosition}
      onIconClick={togglePassword}
      {...rest}
    />
  );
};
