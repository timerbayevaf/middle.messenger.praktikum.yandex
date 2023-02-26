import { MODAL_TYPE } from 'constants';
import { IUserDTO } from 'types';

interface UserInfoProps {
  name: string;
  avatar: string;
  users?: Array<IUserDTO>;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

export { UserInfoProps };
