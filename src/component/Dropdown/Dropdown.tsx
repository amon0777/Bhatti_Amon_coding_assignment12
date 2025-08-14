import React, { useState } from 'react';
import { DropdownContainer, DropdownButton, DropdownList, DropdownListItem } from './Dropdown.styled';
import { DropdownProps, DropdownOption } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onSelect, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    setSelectedLabel(option.label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle} disabled={disabled}>
        {selectedLabel || placeholder}
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <DropdownListItem key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </DropdownListItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;