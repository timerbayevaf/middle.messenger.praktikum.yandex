import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './button.css';

type ButtonView = 'secondary' | 'primary' | 'none' | 'icon';
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonSize = 'large' | 'small' | 'medium';

interface ButtonProps {
  handleClick?: () => void;
  label?: string;
  children?: string;
  className?: string;
  view?: ButtonView;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  name?: string;
}

const Button = ({
  handleClick,
  label,
  children,
  className,
  view,
  size = 'medium',
  type = 'button',
  disabled,
  name,
}: ButtonProps) => (
  <button
    className={cn(
      'button',
      {
        button_primary: view === 'primary',
        button_secondary: view === 'secondary',
        button_medium: size === 'medium',
        button__large: size === 'large',
        button__small: size === 'small',
        button__icon: view === 'icon',
        button_disabled: !!disabled,
      },
      className
    )}
    onClick={handleClick}
    name={name}
    type={type}
  >
    {label || children}
  </button>
);

export default Button;
