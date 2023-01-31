import { Icons } from 'components/icon';
import { CHATLIST_VIEW } from 'constants';
import { AIcreateElement } from 'core';
import { IUser } from 'types';
import { BlockInfo } from './components/block-info';
import { ProfileAvatar } from './components/profile-avatar';

import './view.css';

interface ViewProps extends IUser {
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
}

const View = ({
  login,
  email,
  first_name,
  second_name,
  avatar,
  phone,
  handleChangeUrl,
}: ViewProps) => (
  <div className='view'>
    <ProfileAvatar
      avatar={avatar}
      first_name={first_name}
      second_name={second_name}
    />
    <div className='view__blocks-info'>
      <BlockInfo type={Icons.Email} text={email} label='Почта' />
      <BlockInfo type={Icons.Name} text={login} label='Логин' />
      <BlockInfo type={Icons.Phone} text={phone} label='Телефон' />
    </div>

    <div className='view__edit-buttons'>
      <BlockInfo
        type={Icons.Edit}
        text='Изменить данные'
        handleClick={() => handleChangeUrl(CHATLIST_VIEW.EDIT_PROFILE)}
      />
      <BlockInfo
        type={Icons.Password}
        text='Изменить пароль'
        handleClick={() => handleChangeUrl(CHATLIST_VIEW.EDIT_PASSWORD)}
      />
      <BlockInfo
        type={Icons.Signout}
        text='Выйти'
        className='view__text_exit'
      />
    </div>
  </div>
);

export default View;
