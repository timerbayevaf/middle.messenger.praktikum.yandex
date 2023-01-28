import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';

interface ModalDialogProps {
  modalType: MODAL_TYPE;
  zIndex?: number;
  style?: JSX.CSSProperties;
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
}

interface ProfileDialogProps {
  handleClick(profileViewType: CHATLIST_VIEW): void;
}

interface MessageDialogProps {
  handleClick: JSX.EventHandler;
}

interface UserDialogProps {
  handleClick: JSX.EventHandler;
}

export {
  ModalDialogProps,
  ProfileDialogProps,
  MessageDialogProps,
  UserDialogProps,
};
