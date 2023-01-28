import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { AIcreateElement } from 'core';
import { UserDialogProps } from './types';

export const UserDialog = ({ handleClick }: UserDialogProps) => (
  <span>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.Plus} />
      Добавить пользователя
    </Button>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.Minus} color='red' />
      Удалить пользователя
    </Button>
  </span>
);
