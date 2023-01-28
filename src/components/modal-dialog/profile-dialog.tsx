import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { CHATLIST_VIEW } from 'constants';
import { AIcreateElement } from 'core';
import { ProfileDialogProps } from './types';

export const ProfileDialog = ({ handleClick }: ProfileDialogProps) => (
  <Button
    handleClick={() => handleClick(CHATLIST_VIEW.VIEW_PROFILE)}
    size='small'
    className='dialog__button'
  >
    <Icon size={20} type={Icons.UserProfile} />
    Профиль
  </Button>
);
