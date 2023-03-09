import { CHATLIST_VIEW, MODAL_TYPE } from 'constant';

interface ModalDialogProps {
  error: string;
  modalType: MODAL_TYPE;
  zIndex?: number;
  style?: JSX.CSSProperties;
  handleChangeViewType(profileViewType: CHATLIST_VIEW): void;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect?: DOMRect;
  }): void;
}

interface ProfileDialogProps {
  handleClick(profileViewType: CHATLIST_VIEW): void;
}

interface AddUserDialogProps {
  error: string;
  handleSubmit(e: Event): void;
  handleCancel(): void;
}

interface RemoveUserDialogProps {
  error: string;
  handleSubmit(e: Event): void;
  handleCancel(): void;
}

interface MessageDialogProps {
  handleClick: JSX.EventHandler;
}

interface UserDialogProps {
  handleClick(type: MODAL_TYPE): void;
}

export {
  ModalDialogProps,
  ProfileDialogProps,
  MessageDialogProps,
  UserDialogProps,
  AddUserDialogProps,
  RemoveUserDialogProps,
};
