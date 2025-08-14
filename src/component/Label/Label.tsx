import React from 'react';
import { StyledLabel } from './Label.styled';
import { LabelProps } from './Label.types';

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;