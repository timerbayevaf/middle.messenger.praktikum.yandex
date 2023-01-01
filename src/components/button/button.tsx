import { AIcreateElement } from 'core';

import './button.css';

interface Props {
  handleClick?: (e: HTMLButtonElement) => void;
  label?: string;
  children?: string;
}

const Button = ({ handleClick, label, children }: Props) => (
  <button className='button' onclick={handleClick}>
    {label || children}
  </button>
);

export default Button;
