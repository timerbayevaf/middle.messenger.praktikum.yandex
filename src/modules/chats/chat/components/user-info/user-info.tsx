import { AIcreateElement } from 'core';
import { Icon, Icons } from 'components/icon';

import './user-info.css';
import Avatar from 'components/avatar/avatar';
import { Button } from 'components/button';

const UserInfo = () => (
  <div className='user-info'>
    <Avatar className='user-info__image-container' src='/img/avatar1.png' />
    <div className={['user-info__name']}>Name</div>
    <div className='user-info__icon-block'>
      <Button type='icon' size='small'>
        <Icon size={20} type={Icons.Dots} />
      </Button>
    </div>
  </div>
);

export { UserInfo };
