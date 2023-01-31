import { IChatMessage } from 'src/types/chats/messages';
import { IUser } from 'types';
import { MODAL_TYPE } from 'constants';

interface ChatContainerProps {
  chatMessages: IChatMessage[];
  user: IUser;

  message: string;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

export { ChatContainerProps };
