import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './input-field.css';

interface Props {
  value: string;
  label?: string;
  type?: string;
  error?: string;
}

const InputField = ({ value, type, label = '', error = '' }: Props) => {
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
        className={cn(
          'input-field__label',
          'input-field__color_red',
          'input-field__label_error'
        )}
      >
        {error}
      </label>
    </div>
  );
};

export default InputField;
