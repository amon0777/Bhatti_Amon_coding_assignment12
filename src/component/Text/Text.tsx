import React from 'react';
import { StyledText } from './Text.styled';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ text, disabled, size }) => {
  return (
    <StyledText disabled={disabled} size={size}>
      {text}
    </StyledText>
  );
};

export default Text;