import { Icon, Icons } from 'components/icon';
import { AIcreateElement } from 'core';

interface ProfileAvatarProps {
  avatar: string;
  first_name?: string;
  second_name?: string;
  handleChangeAvatar: JSX.EventHandler;
}

import './profile-avatar.css';

const ProfileAvatar = ({
  avatar,
  first_name,
  second_name,
  handleChangeAvatar,
}: ProfileAvatarProps) => (
  <div className='profile-avatar'>
    <div className='profile-avatar__img-wrapper'>
      <img
        className='profile-avatar__photo'
        src={avatar}
        alt={`Фото пользователя ${first_name}`}
      />
    </div>
    <div className='profile-avatar__gradient'></div>
    <div className='profile-avatar__name'>
      <div className='profile-avatar__first-name'>{first_name}</div>
      <div className='profile-avatar__second-name'>{second_name}</div>
    </div>
    <div className='profile-avatar__image-update'>
      <form id='avatarForm'>
        <label for='myfile'>
          <div className='profile-avatar__button' name='avatar'>
            <Icon size={30} type={Icons.ImageEdit} color='white' />
          </div>
        </label>
        <input
          onChange={handleChangeAvatar}
          className='profile-avatar__hidden_input'
          id='myfile'
          type='file'
          name='myfile'
          accept='image/*'
          value={''}
        />
      </form>
    </div>
  </div>
);

export { ProfileAvatar };
