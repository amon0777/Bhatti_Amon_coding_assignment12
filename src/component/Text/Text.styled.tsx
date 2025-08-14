import styled from 'styled-components';
import { TextProps } from './Text.types';

const handleSize = (size: TextProps['size']) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'large':
      return '20px';
    default:
      return '16px';
  }
};

export const StyledText = styled.p<TextProps>`
  font-family: Arial, sans-serif;
  color: ${(props) => (props.disabled ? '#a0a0a0' : '#333')};
  font-size: ${(props) => handleSize(props.size)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  margin: 0;
  padding: 0;
`;