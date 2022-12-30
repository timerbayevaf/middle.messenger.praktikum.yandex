import { AIcreateElement } from 'core';

import './button.css';
interface Props {
  handleClick?: any;
  label?: string;
  children?: string;
}

export const Button = ({ handleClick, label, children }: Props) => (
  <button className='button' onclick={handleClick}>
    {label || children}
  </button>
);
