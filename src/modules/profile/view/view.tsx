import { Icons } from 'components/icon';
import { CHATLIST_VIEW } from 'constant';
import { AIcreateElement } from 'core';
import { IUserDTO } from 'types';
import { get } from 'utils/get';
import { BlockInfo } from './components/block-info';
import { ProfileAvatar } from './components/profile-avatar';
import userController from 'controllers/user';

import './view.css';

interface ViewProps {
  user: IUserDTO | null;
  handleChangeViewType(profileViewType: CHATLIST_VIEW): void;
  handleChangeAvatar: JSX.EventHandler;
}

const View = ({
  user,
  handleChangeViewType,
  handleChangeAvatar,
}: ViewProps) => (
  <div className='view'>
    <ProfileAvatar
      avatar={get(user, 'avatar') as string}
      first_name={get(user, 'first_name') as string}
      second_name={get(user, 'second_name') as string}
      handleChangeAvatar={handleChangeAvatar}
    />
    <div className='view__blocks-info'>
      <BlockInfo
        type={Icons.Email}
        text={get(user, 'email') as string}
        label='Почта'
      />
      <BlockInfo
        type={Icons.Name}
        text={get(user, 'login') as string}
        label='Логин'
      />
      <BlockInfo
        type={Icons.Phone}
        text={get(user, 'phone') as string}
        label='Телефон'
      />
    </div>

    <div className='view__edit-buttons'>
      <BlockInfo
        type={Icons.Edit}
        text='Изменить данные'
        handleClick={() => handleChangeViewType(CHATLIST_VIEW.EDIT_PROFILE)}
      />
      <BlockInfo
        type={Icons.Password}
        text='Изменить пароль'
        handleClick={() => handleChangeViewType(CHATLIST_VIEW.EDIT_PASSWORD)}
      />
      <BlockInfo
        type={Icons.Signout}
        handleClick={() => userController.logout()}
        text='Выйти'
        className='view__text_exit'
      />
    </div>
  </div>
);

export default View;
