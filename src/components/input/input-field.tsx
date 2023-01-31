import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { InputFieldProps } from './types';

import './input-field.css';

const InputField = ({
  value,
  type,
  label = '',
  error = '',
  name,
  handleChange,
  handleFocus,
  handleBlur,
}: InputFieldProps) => {
  return (
    <div className='input-field'>
      <label
        className={cn('input-field__label', {
          'input-field__color_red': error !== '',
        })}
      >
        {label}
      </label>

      <div className='input-field__wrapper'>
        <input
          name={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          aria-invalid='false'
          className='input-field__input'
          value={value}
        />
        <fieldset
          aria-hidden='true'
          className={cn('input-field__fieldset', {
            'input-field__fieldset_error': error !== '',
          })}
        >
          <legend className='input-field__legend'>
            <span
              className={cn('input-field__span', {
                'input-field__span_empty': label === '',
              })}
            >
              {label}
            </span>
          </legend>
        </fieldset>
      </div>

      <label
        className={cn('input-field__label_error', 'input-field__color_red')}
      >
        {error}
      </label>
    </div>
  );
};

export default InputField;
