import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
