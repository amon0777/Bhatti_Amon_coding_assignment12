import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick, backgroundColor }) => {
  return (
    <StyledButton
      style={{ backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
