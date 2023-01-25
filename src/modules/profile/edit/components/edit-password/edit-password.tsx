import { AIcreateElement } from 'core';
import { Input } from 'components/input';
import { getError, SPEC_NAME } from 'utils/regexp';

import './edit-password.css';

interface EditPasswordProps {
  old_password: string;
  new_password: string;
  second_new_password: string;
  error: { [key in SPEC_NAME]?: string };
  handleChange: JSX.EventHandler;
}

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
