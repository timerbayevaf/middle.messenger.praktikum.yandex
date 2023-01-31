import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';
import { IChatMessage } from 'types';

interface ModalInfo {
  styles?: JSX.CSSProperties;
  modalType: MODAL_TYPE;
}

type USER_SPEC_TYPE =
  | 'login'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'old_password'
  | 'new_password'
  | 'second_new_password';

interface ChatsPageProps
  extends Pick<ChatsProps, 'viewType' | 'chatMessages'> {}

interface ChatsState
  extends Pick<
    ChatsProps,
    | 'message'
    | 'activeId'
    | 'searchValue'
    | 'profileInfo'
    | 'profileError'
    | 'modalInfo'
  > {}

interface ChatsProps {
  modalInfo: ModalInfo;
  message: string;
  viewType: CHATLIST_VIEW;
  chatMessages: IChatMessage[];
  searchValue: string;
  activeId: number | null;
  profileInfo: {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
    display_name: string;
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  profileError: { [key in USER_SPEC_TYPE]?: string };
  handleChangeSearch(e: Event): void;
  handleChangeActiveChat(id: number): void;
  handleChangeMessage: JSX.EventHandler;
  handleSubmitMessage: JSX.EventHandler;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
}

export { ModalInfo, USER_SPEC_TYPE, ChatsProps, ChatsState, ChatsPageProps };
