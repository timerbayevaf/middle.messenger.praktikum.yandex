import { AIcreateElement } from 'core';
import { Button } from 'components/button';
import { RemoveUserDialogProps } from '../types';
import InputField from 'components/input/input-field';

import './remove-user.css';

export const RemoveUserDialog = ({
  error,
  handleSubmit,
  handleCancel,
}: RemoveUserDialogProps) => (
  <form
    id='removeUser'
    onSubmit={handleSubmit}
    onClick={(e: Event) => {
      e.stopPropagation();
    }}
    className='remove-user'
  >
    <p>Введите логин, чтобы удалить пользователя</p>
    <InputField name='login' value='' type='text' error={error} />

    <Button type='submit' view='primary'>
      Удалить
    </Button>
    <Button type='button' handleClick={handleCancel}>
      Отмена
    </Button>
  </form>
);
