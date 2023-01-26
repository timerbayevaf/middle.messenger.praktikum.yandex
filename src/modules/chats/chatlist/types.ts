import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';
import { IUser } from 'types';
import { SPEC_NAME } from 'utils/regexp';

interface ChatlistContainerProps {
  searchValue: string;
  user: IUser;
  viewType: CHATLIST_VIEW;
  activeId: number | null;
  password: {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  profileError: { [key in SPEC_NAME]?: string };
  handleChangeActiveChat(id: number): void;
  handleChangeSearch(e: Event): void;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

export { ChatlistContainerProps };
