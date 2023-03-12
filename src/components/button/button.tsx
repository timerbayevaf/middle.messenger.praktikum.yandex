import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './button.css';
import { ButtonProps } from './types';

const Button = ({
  id = '',
  handleClick,
  label = '',
  children,
  className = '',
  view,
  size = 'medium',
  type = 'button',
  disabled,
  name = '',
}: ButtonProps) => (
  <button
    id={id}
    data-testid={id}
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
