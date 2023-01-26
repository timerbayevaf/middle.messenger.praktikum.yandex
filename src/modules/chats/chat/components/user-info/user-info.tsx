import { AIcreateElement } from 'core';
import { Icon, Icons } from 'components/icon';

import './user-info.css';
import Avatar from 'components/avatar/avatar';
import { Button } from 'components/button';
import { MODAL_TYPE } from 'constants';

interface UserInfoProps {
  name: string;
  avatar: string;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

const UserInfo = ({
  name,
  avatar,
  handleChangeVisibleModal,
}: UserInfoProps) => (
  <div className='user-info'>
    <Avatar title={name} className='user-info__image-container' src={avatar} />
    <div className={'user-info__name'}>{name}</div>
    <div className='user-info__icon-block'>
      <Button
        view='icon'
        size='small'
        handleClick={(e) => {
          e.stopPropagation();

          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();

          handleChangeVisibleModal({
            modalType: MODAL_TYPE.USER,
            rect,
          });
        }}
      >
        <Icon size={20} type={Icons.Dots} />
      </Button>
    </div>
  </div>
);

export { UserInfo };
