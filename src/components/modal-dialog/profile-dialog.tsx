import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { AIcreateElement } from 'core';

interface ModalDialogProps {
  handleClick: JSX.EventHandler;
}

export const ProfileDialog = ({ handleClick }: ModalDialogProps) => (
  <Button handleClick={handleClick} size='small' className='dialog__button'>
    <Icon size={20} type={Icons.UserProfile} />
    Профиль
  </Button>
);
