import { MODAL_TYPE } from 'constants';
import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { MessageDialog } from './message/message-dialog';
import { ProfileDialog } from './profile/profile-dialog';
import { UserDialog } from './user/user-dialog';
import { ModalDialogProps } from './types';
import chatController from 'controllers/chats';

import './modal-dialog.css';
import { AddUserDialog } from './add-user/add-user-dialog';
import { RemoveUserDialog } from './remove-user/remove-user-dialog';

export const ModalDialog = ({
  error,
  modalType,
  style,
  handleChangeViewType,
  handleChangeVisibleModal,
}: ModalDialogProps) => {
  const handleClick = (modalType: MODAL_TYPE) => {
    handleChangeVisibleModal({
      modalType,
    });
  };

  const handleSubmitAddUser = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();

    const login = (e.target as HTMLFormElement).login.value;

    chatController.addUserToChat(login).then(() => {
      handleClick(MODAL_TYPE.NONE);
    });
  };

  const handleSubmitRemoveUser = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();

    const login = (e.target as HTMLFormElement).login.value;

    chatController.removeUserFromChat(login).then(() => {
      handleClick(MODAL_TYPE.NONE);
    });
  };

  return (
    <div
      id='dialogBackdrop'
      className={cn('dialog-backdrop', {
        'dialog-backdrop_visible': modalType !== MODAL_TYPE.NONE,
      })}
      style={style}
    >
      <div className='dialog-container'>
        <div className='dialog-content' id='dialogContent'>
          {modalType === MODAL_TYPE.PROFILE && (
            <ProfileDialog handleClick={handleChangeViewType} />
          )}

          {modalType === MODAL_TYPE.ADD_USER && (
            <AddUserDialog
              error={error}
              handleSubmit={handleSubmitAddUser}
              handleCancel={() => handleClick(MODAL_TYPE.NONE)}
            />
          )}

          {modalType === MODAL_TYPE.REMOVE_USER && (
            <RemoveUserDialog
              error={error}
              handleSubmit={handleSubmitRemoveUser}
              handleCancel={() => handleClick(MODAL_TYPE.NONE)}
            />
          )}

          {modalType === MODAL_TYPE.USER && (
            <UserDialog handleClick={handleClick} />
          )}
          {modalType === MODAL_TYPE.MESSAGE && (
            <MessageDialog handleClick={() => null} />
          )}
        </div>
      </div>
    </div>
  );
};
