import { AIcreateElement } from 'core';
import { Icon, Icons } from 'components/icon';

import './user-info.css';
import Avatar from 'components/avatar/avatar';
import { Button } from 'components/button';

interface UserInfoProps {
  name: string;
  avatar: string;
}

const UserInfo = ({ name, avatar }: UserInfoProps) => (
  <div className='user-info'>
    <Avatar title={name} className='user-info__image-container' src={avatar} />
    <div className={['user-info__name']}>{name}</div>
    <div className='user-info__icon-block'>
      <Button view='icon' size='small'>
        <Icon size={20} type={Icons.Dots} />
      </Button>
    </div>
  </div>
);

export { UserInfo };
