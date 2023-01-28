import { MODAL_TYPE } from 'constants';

interface UserInfoProps {
  name: string;
  avatar: string;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

export { UserInfoProps };
