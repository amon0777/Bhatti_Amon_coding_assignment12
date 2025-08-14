import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

export const DropdownButton = styled.button<{ disabled?: boolean }>`
  background-color: #f1f1f1;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.disabled ? '#f1f1f1' : '#ddd')};
  }
`;

export const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const DropdownListItem = styled.li`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`