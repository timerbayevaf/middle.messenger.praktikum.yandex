import { AIcreateElement } from 'core';

import './input-field.css';

interface Props {
  placeholder: string;
  value: string;
}

const InputField = ({ value, placeholder }: Props) => (
  <input className='input-field' value={value} placeholder={placeholder} />
);

export default InputField;
