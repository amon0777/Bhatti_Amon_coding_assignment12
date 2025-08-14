export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  disabled?: boolean;
  onSelect?: (value: string | number) => void;
  placeholder?: string;
}