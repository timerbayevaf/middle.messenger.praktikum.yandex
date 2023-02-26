import { AIcreateElement } from 'core';
import { Button } from 'components/button';
import { AddUserDialogProps } from '../types';
import InputField from 'components/input/input-field';

import './add-user.css';

export const AddUserDialog = ({
  error,
  handleSubmit,
  handleCancel,
}: AddUserDialogProps) => (
  <form
    id='addUser'
    onSubmit={handleSubmit}
    onClick={(e: Event) => {
      e.stopPropagation();
    }}
    className='add-user'
  >
    <p>Введите логин, чтобы добавить пользователя</p>
    <InputField name='login' value='' type='text' error={error} />

    <Button type='submit' view='primary'>
      Добавить
    </Button>
    <Button type='button' handleClick={handleCancel}>
      Отмена
    </Button>
  </form>
);
