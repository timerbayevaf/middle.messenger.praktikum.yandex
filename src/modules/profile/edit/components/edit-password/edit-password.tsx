import { AIcreateElement } from 'core';
import { Input } from 'components/input';

import './edit-password.css';

interface EditPasswordProps {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

const EditPassword = ({
  oldPassword,
  newPassword,
  newPassword2,
}: EditPasswordProps) => (
  <div className='edit-password'>
    <Input label='Старый пароль' value={oldPassword} name='oldPassword' />
    <Input label='Новый пароль' value={newPassword} name='newPassword' />
    <Input
      label='Повторите новый пароль'
      value={newPassword2}
      name='newPassword2'
    />
  </div>
);

export default EditPassword;
