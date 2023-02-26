import { CHATLIST_VIEW, MODAL_TYPE, ValidateType } from 'constants';
import { IChatMessage, IChatItemDTO, IUserDTO } from 'types';

interface ModalInfo {
  styles?: JSX.CSSProperties;
  modalType: MODAL_TYPE;
}

type USER_INFO_SPEC_TYPE =
  | ValidateType.Login
  | ValidateType.Email
  | ValidateType.FirstName
  | ValidateType.SecondName
  | ValidateType.DisplayName
  | ValidateType.Phone;

type USER_PASSWORD_SPEC_TYPE =
  | ValidateType.Password
  | ValidateType.OldPassword
  | ValidateType.NewPassword;

type USER_SPEC_TYPE =
  | ValidateType.Login
  | ValidateType.Email
  | ValidateType.FirstName
  | ValidateType.SecondName
  | ValidateType.DisplayName
  | ValidateType.Phone
  | ValidateType.NewPassword
  | ValidateType.OldPassword;

interface ChatsPageProps {
  query: { viewType?: string };
  user: IUserDTO | null;
  chats: Array<IChatItemDTO>;
  chatId: number | null;
  errorMessage: string;
  chatMessages: Array<IChatMessage>;
}

interface ChatsState
  extends Pick<
    ChatsProps,
    | 'message'
    | 'searchValue'
    | 'profileInfo'
    | 'profileError'
    | 'modalInfo'
    | 'profilePassword'
  > {}

interface ChatsProps {
  modalInfo: ModalInfo;
  message: string;
  viewType: CHATLIST_VIEW;
  chats: Array<IChatItemDTO>;
  chatMessages: IChatMessage[];
  searchValue: string;
  profileInfo: IUserDTO;
  profilePassword: {
    oldPassword: string;
    newPassword: string;
    password: string;
  };
  profileError: { [key in USER_SPEC_TYPE]?: string };
  handleChangeSearch(e: Event): void;
  handleChangeActiveChat(chat: IChatItemDTO): void;
  handleChangeMessage: JSX.EventHandler;
  handleSubmitMessage: JSX.EventHandler;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
}

export {
  ModalInfo,
  USER_SPEC_TYPE,
  USER_INFO_SPEC_TYPE,
  USER_PASSWORD_SPEC_TYPE,
  ChatsProps,
  ChatsState,
  ChatsPageProps,
};
