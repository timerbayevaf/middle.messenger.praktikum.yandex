import { MODAL_TYPE } from 'constants';
import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { MessageDialog } from './message-dialog';

import './modal-dialog.css';
import { ProfileDialog } from './profile-dialog';
import { UserDialog } from './user-dialog';

interface ModalDialogProps {
  modalType: MODAL_TYPE;
  zIndex?: number;
  style?: JSX.CSSProperties;
}

export const ModalDialog = ({ modalType, style }: ModalDialogProps) => {
  const handleClick = () => {
    console.warn(modalType);
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
            <ProfileDialog handleClick={handleClick} />
          )}
          {modalType === MODAL_TYPE.USER && (
            <UserDialog handleClick={handleClick} />
          )}
          {modalType === MODAL_TYPE.MESSAGE && (
            <MessageDialog handleClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
};
