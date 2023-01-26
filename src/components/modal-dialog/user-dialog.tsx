import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AIcreateElement, AIcreateFragment } from 'core';

interface ModalDialogProps {
  handleClick: JSX.EventHandler;
}

export const UserDialog = ({ handleClick }: ModalDialogProps) => (
  <>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.Plus} />
      Добавить пользователя
    </Button>
    <Button handleClick={handleClick} size='small' className='dialog__button'>
      <Icon size={20} type={Icons.Minus} color='red' />
      Удалить пользователя
    </Button>
  </>
);
