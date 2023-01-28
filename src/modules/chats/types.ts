import { IChatMessage } from 'src/types/chats/messages';
import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';
import { SPEC_NAME } from 'utils/regexp';
import { IUser } from 'types';

interface ChatsProps {
  message: string;
  searchValue: string;
  chatMessages: IChatMessage[];
  viewType: CHATLIST_VIEW;
  activeId: number | null;
  profileInfo: IUser & {
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  profileError: { [key in SPEC_NAME]?: string };
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
  handleChangeActiveChat(id: number): void;
  handleChangeSearch(e: Event): void;
  handleChangeMessage: JSX.EventHandler;
  handleSubmitMessage: JSX.EventHandler;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
}

export { ChatsProps };
