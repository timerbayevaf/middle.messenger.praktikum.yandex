import { AIcreateElement } from 'core';
import { Icon, Icons } from 'components/icon';

import './user-info.css';
import Avatar from 'components/avatar/avatar';

const UserInfo = () => (
  <div className='user-info'>
    <Avatar
      className='user-info__image-container'
      src='https://www.w3schools.com/howto/img_avatar.png'
    />
    <div className='user-info__name'>Name</div>
    <div>
      <Icon size={20} type={Icons.Dots} />
    </div>
  </div>
);

export { UserInfo };
