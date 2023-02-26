import { IChatMessage } from 'src/types/chats/messages';
import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';
import { IChatItemDTO, IUserDTO } from 'types';

interface ChatsProps {
  chats: Array<IChatItemDTO>;
  message: string;
  searchValue: string;
  chatMessages: IChatMessage[];
  viewType: CHATLIST_VIEW;
  chatId: number | null;
  profilePassword: {
    oldPassword: string;
    newPassword: string;
    password: string;
  };
  user: IUserDTO | null;
  profileInfo: IUserDTO;
  profileError: Record<string, string>;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
  handleChangeActiveChat(id: number): void;
  handleChangeSearch(e: Event): void;
  handleChangeUserInfoFields: JSX.EventHandler;
  handleSubmitUserInfoFields: JSX.EventHandler;
  handleChangeUserPasswordFields: JSX.EventHandler;
  handleSubmitUserPasswordFields: JSX.EventHandler;
  handleChangeMessage: JSX.EventHandler;
  handleSubmitMessage: JSX.EventHandler;
  handleChangeAvatar: JSX.EventHandler;
  handleSubmitCreateChat: JSX.EventHandler;
  handleChangeViewType(viewType: CHATLIST_VIEW): void;
}

export { ChatsProps };
