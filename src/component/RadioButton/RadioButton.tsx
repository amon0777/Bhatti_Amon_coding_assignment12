import React from 'react';
import { RadioButtonContainer, HiddenRadioButton, RadioButtonMark } from './RadioButton.styled';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, name, disabled, checked, onChange }) => {
  return (
    <RadioButtonContainer disabled={disabled}>
      {label}
      <HiddenRadioButton
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <RadioButtonMark />
    </RadioButtonContainer>
  );
};

export default RadioButton;