import styled from 'styled-components';

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: ${(props) => (props.disabled ? '#a0a0a0' : '#333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;