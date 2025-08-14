export interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  disabled?: boolean;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}