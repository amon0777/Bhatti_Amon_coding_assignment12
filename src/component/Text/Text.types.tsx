
import { ReactNode } from 'react';

export type TextSize = 'small' | 'medium' | 'large';

export interface TextProps {
  // `text` can be optional since we'll be using children
  text?: string; 
  children?: ReactNode; // Allows the component to accept children
  disabled?: boolean;
  size?: TextSize;
}