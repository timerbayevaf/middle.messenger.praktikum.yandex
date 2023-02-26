import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { get } from 'utils/get';
import { EditPasswordProps } from './types';

import './edit-password.css';

const EditPassword = ({
  oldPassword,
  newPassword,
  password,
  error,
  handleChange,
}: EditPasswordProps) => (
  <div className='edit-password'>
    <Input
      label='Старый пароль'
      type='password'
      value={oldPassword}
      handleChange={handleChange}
      handleBlur={handleChange}
      handleFocus={handleChange}
      error={get(error, 'oldPassword')}
      name='oldPassword'
    />
    <Input
      type='password'
      label='Повторите новый пароль'
      value={password}
      error={get(error, 'password')}
      handleChange={handleChange}
      handleBlur={handleChange}
      handleFocus={handleChange}
      name='password'
    />
    <Input
      type='password'
      label='Новый пароль'
      value={newPassword}
      error={get(error, 'newPassword')}
      handleChange={handleChange}
      handleBlur={handleChange}
      handleFocus={handleChange}
      name='newPassword'
    />
  </div>
);

export default EditPassword;
