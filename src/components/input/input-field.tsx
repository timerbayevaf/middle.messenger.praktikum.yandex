import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { InputFieldProps } from './types';

import './input-field.css';

const InputField = ({
  defaultValue = '',
  value,
  type,
  label = '',
  id,
  error = '',
  name,
  className,
  accept = '',
  handleChange,
  handleFocus,
  handleBlur,
}: InputFieldProps) => {
  return (
    <div className={cn('input-field', className)}>
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
          data-testid={id}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          accept={accept}
          aria-invalid='false'
          className='input-field__input'
          value={value?.length > 0 ? value : defaultValue}
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
