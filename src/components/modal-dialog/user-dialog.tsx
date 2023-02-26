import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { MODAL_TYPE } from 'constants';
import { AIcreateElement } from 'core';
import { UserDialogProps } from './types';

export const UserDialog = ({ handleClick }: UserDialogProps) => (
  <span>
    <Button
      handleClick={(e) => {
        e.stopPropagation();
        handleClick(MODAL_TYPE.ADD_USER);
      }}
      size='small'
      className='dialog__button'
    >
      <Icon size={20} type={Icons.Plus} />
      Добавить пользователя
    </Button>
    <Button
      handleClick={() => handleClick(MODAL_TYPE.REMOVE_USER)}
      size='small'
      className='dialog__button'
    >
      <Icon size={20} type={Icons.Minus} color='red' />
      Удалить пользователя
    </Button>
  </span>
);
