import { Button } from 'components/button';
import { Icon, Icons } from 'components/icon';
import { AIcreateElement } from 'core';

interface ProfileAvatarProps {
  avatar: string;
  first_name?: string;
  second_name?: string;
}

import './profile-avatar.css';

const ProfileAvatar = ({
  avatar,
  first_name,
  second_name,
}: ProfileAvatarProps) => (
  <div className='profile-avatar'>
    <div className='profile-avatar__img-wrapper'>
      <img className='profile-avatar__photo' src={avatar} />
    </div>
    <div className='profile-avatar__gradient'></div>
    <div className='profile-avatar__name'>
      <div className='profile-avatar__first-name'>{first_name}</div>
      <div className='profile-avatar__second-name'>{second_name}</div>
    </div>
    <div className='profile-avatar__image-update'>
      <Button className='profile-avatar__button' size='small' name='avatar'>
        <Icon size={30} type={Icons.ImageEdit} color='white' />
      </Button>
    </div>
  </div>
);

export { ProfileAvatar };
