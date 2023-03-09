// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AIcreateElement, AIcreateFragment } from 'core';
import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { CHATLIST_VIEW } from 'constant';
import { ProfileDialogProps } from '../types';

export const ProfileDialog = ({ handleClick }: ProfileDialogProps) => (
  <>
    <Button
      handleClick={() => handleClick(CHATLIST_VIEW.VIEW_PROFILE)}
      size='small'
      className='dialog__button'
    >
      <Icon size={20} type={Icons.UserProfile} />
      Профиль
    </Button>
    <Button
      handleClick={() => handleClick(CHATLIST_VIEW.ADD_CHAT)}
      size='small'
      className='dialog__button'
    >
      <Icon size={20} type={Icons.AddChat} />
      Создать чат
    </Button>
  </>
);
