import styled from 'styled-components';

export const RadioButtonContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  user-select: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const HiddenRadioButton = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const RadioButtonMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid #ccc;

  ${HiddenRadioButton}:checked + & {
    background-color: #2196F3;
  }

  ${HiddenRadioButton}:checked + &:after {
    display: block;
  }

  ${RadioButtonContainer}:hover ${HiddenRadioButton}:not(:disabled) + & {
    background-color: #ccc;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;