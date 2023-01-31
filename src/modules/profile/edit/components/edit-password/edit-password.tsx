import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { getError } from 'utils/regexp';
import { EditPasswordProps } from './types';

import './edit-password.css';

const EditPassword = ({
  old_password,
  new_password,
  second_new_password,
  error,
  handleChange,
}: EditPasswordProps) => (
  <div className='edit-password'>
    <Input
      label='Старый пароль'
      type='password'
      value={old_password}
      handleChange={handleChange}
      handleBlur={handleChange}
      handleFocus={handleChange}
      error={getError(error?.old_password)}
      name='old_password'
    />
    <Input
      type='password'
      label='Новый пароль'
      value={new_password}
      error={getError(error?.new_password)}
      handleChange={handleChange}
      handleBlur={handleChange}
      handleFocus={handleChange}
      name='new_password'
    />
    <Input
      type='password'
      label='Повторите новый пароль'
      value={second_new_password}
      error={getError(error?.second_new_password)}
      handleChange={handleChange}
      handleBlur={handleChange}
      handleFocus={handleChange}
      name='second_new_password'
    />
  </div>
);

export default EditPassword;
