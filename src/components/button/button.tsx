import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './button.css';

type ButtonType = 'secondary' | 'primary' | 'none' | 'icon';
type ButtonSize = 'large' | 'small' | 'medium';
interface Props {
  handleClick?: (e: HTMLButtonElement) => void;
  label?: string;
  children?: string;
  className?: string;
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
  type,
  size = 'medium',
  disabled,
  name,
}: Props) => (
  <button
    className={cn(
      'button',
      {
        button_primary: type === 'primary',
        button_secondary: type === 'secondary',
        button_medium: size === 'medium',
        button__large: size === 'large',
        button__small: size === 'small',
        button__icon: type === 'icon',
        button_disabled: !!disabled,
      },
      className
    )}
    onclick={handleClick}
    name={name}
  >
    {label || children}
  </button>
);

export default Button;
