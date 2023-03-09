import { CHATLIST_VIEW, MODAL_TYPE } from 'constant';
import { IChatItemDTO, IUserDTO } from 'types';

interface ChatlistContainerProps {
  chats: Array<IChatItemDTO>;
  searchValue: string;
  viewType: CHATLIST_VIEW;
  chat: IChatItemDTO | null;
  profilePassword: {
    oldPassword: string;
    newPassword: string;
    password: string;
  };
  user: IUserDTO | null;
  profileInfo: IUserDTO;
  profileError: Record<string, string>;
  handleChangeActiveChat(chat: IChatItemDTO): void;
  handleChangeSearch(e: Event): void;
  handleChangeUserInfoFields: JSX.EventHandler;
  handleSubmitUserInfoFields: JSX.EventHandler;
  handleChangeUserPasswordFields: JSX.EventHandler;
  handleSubmitUserPasswordFields: JSX.EventHandler;
  handleSubmitCreateChat: JSX.EventHandler;
  handleChangeAvatar: JSX.EventHandler;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
  handleChangeViewType(viewType: CHATLIST_VIEW): void;
}

export { ChatlistContainerProps };
